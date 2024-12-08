// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, size = 'md' }) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-lg',
    md: 'px-4 py-2 text-2xl',
    lg: 'px-6 py-3 text-3xl',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded w-full font-bold text-white bg-purple-600 hover:bg-purple-700 transition duration-200 ${sizeClasses[size]}`}
    >
      {text}
    </button>
  );
};
