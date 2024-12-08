import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-4 right-4 w-96 px-4 py-3 border rounded-lg shadow ${
        type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'
      }`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <div>
          <strong className="font-bold">{type === 'success' ? 'Success!' : 'Error!'}</strong>
          <span className="block sm:inline ml-2">{message}</span>
        </div>
        <button
          onClick={onClose}
          className="ml-2 text-lg text-gray-700 hover:text-gray-900 border-none px-2 py-1 rounded"
        >
          X
        </button>
      </div>
    </div>
  );
};
