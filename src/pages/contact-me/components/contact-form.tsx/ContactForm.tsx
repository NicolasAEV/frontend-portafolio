import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ContactService } from "../../service/contact-service";
import { ContactFormErrors } from "../../../interface/contact-form-errors.interface";
import type { ContactForm } from "../../../interface/contact-form.interface";

const contactService = new ContactService();

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    name: "",
    email: "",
    message: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  useEffect(() => {
    const validationErrors = contactService.validateFormData(formData);
    setIsDisabled(
      !contactService.isFormValid(validationErrors) ||
      !formData.name ||
      !formData.email ||
      !formData.message 
    );
    setErrors(validationErrors);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      await contactService.sendContactForm({ ...formData });
      setSubmitSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(`Failed to send message: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-white">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-white">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-white">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write a message..."
          rows={2}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isDisabled || isSubmitting}
        className={`w-full py-2 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 
          ${isDisabled || isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"}
        `}
      >
        {isSubmitting ? "Sending..." : "Send message"}
        <AiOutlineMail className="inline-block" />
      </button>

      {submitError && (
        <p className="text-red-500 text-sm mt-2" role="alert">
          {submitError}
        </p>
      )}
      {submitSuccess && (
        <div
          className="flex items-center text-green-500 text-sm mt-2"
          role="alert"
          aria-live="assertive"
        >
          <AiOutlineMail className="mr-2" />
          <p>{submitSuccess}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
