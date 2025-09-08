import { useState } from 'react';
import { ZodError } from 'zod';
import { contactFormSchema, ContactFormData } from '../schemas/contact-form.schema';
import { ContactService } from '../service/contact-service';

const contactService = new ContactService();

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateField = (name: string, value: string) => {
    try {
      const fieldSchema = contactFormSchema.shape[name as keyof ContactFormData];
      fieldSchema.parse(value);
      setErrors((prev) => ({ ...prev, [name]: '' }));
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.issues?.[0]?.message || 'Invalid input';
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      }
    }
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors: Record<string, string> = {};
        error.issues?.forEach((issue) => {
          const path = issue.path[0];
          if (path && typeof path === 'string') {
            validationErrors[path] = issue.message;
          }
        });
        setErrors(validationErrors);
      }
      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
    
    // Clear status messages when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await contactService.sendContactForm(formData);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: `Failed to send message: ${error instanceof Error ? error.message : 'Please try again later.'}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearStatusMessage = () => {
    setSubmitStatus({ type: null, message: '' });
  };

  const isFormValid = Object.values(errors).every((error) => !error) && 
                     formData.name.trim() && 
                     formData.email.trim() && 
                     formData.message.trim();

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    isFormValid,
    handleInputChange,
    handleSubmit,
    clearStatusMessage,
  };
};
