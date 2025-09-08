import { useContactForm } from "../../hooks/useContactForm";
import InputField from "../input-field/InputField";
import TextAreaField from "../textarea-field/TextAreaField";
import SubmitButton from "../submit-button/SubmitButton";
import StatusMessage from "../status-message/StatusMessage";

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    isFormValid,
    handleInputChange,
    handleSubmit,
    clearStatusMessage,
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your name"
        error={errors.name}
        required
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="your@email.com"
        error={errors.email}
        required
      />

      <TextAreaField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Write your message here..."
        rows={4}
        error={errors.message}
        required
      />

      <SubmitButton
        isDisabled={!isFormValid}
        isSubmitting={isSubmitting}
      />

      {submitStatus.type && (
        <StatusMessage
          type={submitStatus.type}
          message={submitStatus.message}
          onClose={clearStatusMessage}
        />
      )}
    </form>
  );
};

export default ContactForm;
