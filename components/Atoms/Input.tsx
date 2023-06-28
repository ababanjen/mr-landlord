import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  className,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
}: InputProps) => {
  const inputClasses = twMerge(
    "rounded p-2 text-disabled border-[0.5px] w-full border-disabled",
    className
  );

  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className={inputClasses}
      placeholder={placeholder}
      name={name}
    />
  );
};

export type InputProps = {
  className?: string;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
};

export default Input;
