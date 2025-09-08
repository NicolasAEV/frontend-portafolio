import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
  onClose?: () => void;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ type, message, onClose }) => {
  const isSuccess = type === 'success';
  
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg mt-2 ${
        isSuccess 
          ? 'bg-green-900/30 border border-green-600 text-green-400' 
          : 'bg-red-900/30 border border-red-600 text-red-400'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center">
        {isSuccess ? (
          <AiOutlineCheckCircle className="mr-2 text-lg" aria-hidden="true" />
        ) : (
          <AiOutlineCloseCircle className="mr-2 text-lg" aria-hidden="true" />
        )}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close message"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default StatusMessage;
