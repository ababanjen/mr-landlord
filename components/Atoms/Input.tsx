import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({
  className,
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  required,
  onBlur,
  onFocus,
  onInvalid,
}: InputProps) => {
  const inputClasses = twMerge(
    'rounded p-2 text-disabled border-[0.5px] w-full border-disabled focus:outline-none focus:ring-0 focus:border-primary-500',
    className,
  );

  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className={inputClasses}
      placeholder={placeholder}
      name={name}
      required={required}
      onBlur={onBlur}
      onFocus={onFocus}
      onInvalid={onInvalid}
    />
  );
};

export type InputProps = {
  className?: string;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.InvalidEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
};

export default Input;
