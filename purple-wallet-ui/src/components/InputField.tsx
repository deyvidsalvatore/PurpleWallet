import React, { useState } from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ type, placeholder, onChange, required = true }) => {
  const [error, setError] = useState('');

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (required && !e.target.value.trim()) {
      setError('This field is required');
    } else {
      setError('');
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
        required={required}
        className="rounded p-2 w-full text-lg"
      />
      {error && <small className="text-red-500 text-sm mt-1">{error}</small>}
    </div>
  );
};
