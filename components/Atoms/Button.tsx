/* eslint-disable react/button-has-type */
import { lowerCase } from "lodash";
import React from "react";
import { twMerge } from "tailwind-merge";

export type BtnProp = {
  disabled?: boolean | undefined;
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
  disabled,
  name,
  onClick,
}: BtnProp) => {
  const inputClasses = twMerge(
    "bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded",
    className
  );

  const compare = (val: string) => lowerCase(type) === lowerCase(val);

  return (
    <button
      type={
        compare("submit") ? "submit" : compare("reset") ? "reset" : "button"
      }
      className={inputClasses}
      disabled={disabled}
      name={name}
      onClick={onClick}
    >
      {children ?? label}
    </button>
  );
};

export default Button;
