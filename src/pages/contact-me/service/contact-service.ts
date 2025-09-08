import { ContactFormData } from "../schemas/contact-form.schema";

export class ContactService {
  async sendContactForm(
    formData: ContactFormData
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
