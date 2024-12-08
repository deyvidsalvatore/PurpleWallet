import React from 'react';

interface ButtonProps {
  onClick?: (e: React.FormEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  text: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'submit',
  text,
  size = 'md',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-lg',
    md: 'px-4 py-2 text-2xl',
    lg: 'px-6 py-3 text-3xl',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded w-full font-bold text-white bg-purple-600 hover:bg-purple-700 transition duration-200 ${sizeClasses[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {text}
    </button>
  );
};
