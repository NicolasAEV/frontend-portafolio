import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

interface SubmitButtonProps {
  isDisabled: boolean;
  isSubmitting: boolean;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isDisabled,
  isSubmitting,
  onClick,
}) => {
  return (
    <button
      type="submit"
      disabled={isDisabled || isSubmitting}
      onClick={onClick}
      className={`w-full py-2 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 
        ${
          isDisabled || isSubmitting
            ? 'bg-gray-600 cursor-not-allowed text-gray-400'
            : 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105'
        }
      `}
      aria-label={isSubmitting ? 'Sending message' : 'Send message'}
    >
      {isSubmitting ? 'Sending...' : 'Send message'}
      <AiOutlineMail 
        className={`inline-block ${isSubmitting ? 'animate-pulse' : ''}`} 
        aria-hidden="true" 
      />
    </button>
  );
};

export default SubmitButton;
