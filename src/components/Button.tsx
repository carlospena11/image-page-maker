
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "font-medium rounded transition-colors",
        {
          'bg-click-teal text-white hover:bg-opacity-90': variant === 'primary',
          'bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10': variant === 'outline',
          'bg-white text-click-darkblue hover:bg-gray-100': variant === 'white',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-5 py-2': size === 'md',
          'px-6 py-3': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
