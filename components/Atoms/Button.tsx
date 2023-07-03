import { lowerCase } from "lodash";
import React from "react";
import { twMerge } from "tailwind-merge";

export type BtnProp = {
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  name?: string | undefined;
  type: "submit" | "reset" | "button" | undefined;
  label?: string;
  children?: React.ReactNode | string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  label = "",
  type = "button",
  children,
  className,
  autoFocus,
  disabled,
  form,
  name,
  onClick,
}: BtnProp) => {
  const inputClasses = twMerge(
    "bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded",
    className
  );

  const compare = (val: string) => lowerCase(type) === lowerCase(val);

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={
        compare("submit") ? "submit" : compare("reset") ? "reset" : "button"
      }
      className={inputClasses}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autoFocus}
      disabled={disabled}
      form={form}
      name={name}
      onClick={onClick}
    >
      {children ?? label}
    </button>
  );
};

export default Button;
