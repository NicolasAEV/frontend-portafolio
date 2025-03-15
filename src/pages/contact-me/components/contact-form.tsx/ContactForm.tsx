import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  // Expresión regular para validar el email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    // Validar campos
    const isNameValid = formData.name.length > 0 && formData.name.length <= 50;
    const isEmailValid = emailRegex.test(formData.email);
    const isMessageValid = formData.message.length > 0 && formData.message.length <= 200;

    setIsDisabled(!(isNameValid && isEmailValid && isMessageValid));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validaciones
    switch (name) {
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: value.length > 50 ? "Maximum 50 characters allowed" : "",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: emailRegex.test(value) ? "" : "Invalid email format",
        }));
        break;
      case "message":
        setErrors((prevErrors) => ({
          ...prevErrors,
          message: value.length > 200 ? "Maximum 200 characters allowed" : "",
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
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
          type="email"
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
        disabled={isDisabled}
        className={`w-full py-2 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 
          ${isDisabled ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"}
        `}
      >
        Send message 
        <AiOutlineMail className="inline-block" />
      </button>
    </form>
  );
};

export default ContactForm;
