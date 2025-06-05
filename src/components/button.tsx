import React, { ReactElement } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary'
  disabled?: boolean;
  className?: string;
  leftIcon?: ReactElement;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary', disabled = false, className = '', leftIcon }) => {
  const baseClasses = "px-4 py-2 rounded font-semibold transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
  };


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="flex items-center gap-2">
        {leftIcon && <span>{leftIcon}</span>}
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;