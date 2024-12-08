import React from "react";

interface ErrorInputProps {
  text: string;
}

const ErrorInput: React.FC<ErrorInputProps> = ({ text }) => {
  return (
    <span className="bg-red-100 text-red-900 rounded p-2 text-sm w-full">
      {text}
    </span>
  );
};

export default ErrorInput;
