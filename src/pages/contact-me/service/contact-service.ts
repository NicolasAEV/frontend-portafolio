import { ContactFormErrors } from "../../interface/contact-form-errors.interface";
import { ContactForm } from "../../interface/contact-form.interface";

export class ContactService {
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  validateFormData(formData: ContactForm): ContactFormErrors {
    const errors: ContactFormErrors = { name: "", email: "", message: "" };

    if (formData.name.length > 50) {
      errors.name = "Maximum 50 characters allowed";
    }

    if (formData.email && !this.emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (formData.message.length > 200) {
      errors.message = "Maximum 200 characters allowed";
    }

    return errors;
  }

  isFormValid(errors: ContactFormErrors): boolean {
    return (
      !errors.name && !errors.email && !errors.message 
    );
  }

  async sendContactForm(
    formData: ContactForm
  ): Promise<{ success: boolean; message: string }> {
    try {
      const url: string = "https://backend-portafolio-lhu2.onrender.com/api/mail/contact";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      return await response.json();
    } catch (error) {
      console.error("Error sending contact form:", error);
      throw error;
    }
  }
}
