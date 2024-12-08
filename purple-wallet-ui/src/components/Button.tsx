import React from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  text: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: 'plus' | 'minus';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'submit',
  text,
  size = 'md',
  disabled = false,
  icon,
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-lg',
    md: 'px-4 py-2 text-2xl',
    lg: 'px-6 py-3 text-3xl',
  };

  let IconComponent = null;
  if (icon === "plus") IconComponent = BiPlusCircle;
  if (icon === "minus") IconComponent = BiMinusCircle;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded w-full font-bold text-white bg-purple-600 hover:bg-purple-700 transition duration-200 ${sizeClasses[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {IconComponent && <IconComponent className="mr-2" />}
      {text}
    </button>
  );
};
