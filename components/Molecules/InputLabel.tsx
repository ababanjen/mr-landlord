import React from "react";
import Text from "@/components/Atoms/Text";
import Input from "@/components/Atoms/Input";
import { twMerge } from "tailwind-merge";
import { InputProps } from "@/components/Atoms/Input";

const InputLabel = ({
  labelClasses,
  className,
  inputClasses,
  value,
  name,
  onChange,
  placeholder,
  type,
  children,
}: InputLabelProps) => {
  const classes = twMerge("flex flex-col gap-2", className);
  const textClasses = twMerge("justify-center flex text-default", labelClasses);
  const fieldClasses = twMerge("", inputClasses);

  return (
    <div className={classes}>
      <Text className={textClasses}>{children ?? name ?? ""}</Text>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={fieldClasses}
      />
    </div>
  );
};

export default InputLabel;

export type InputLabelProps = {
  inputClasses?: string;
  className?: string;
  labelClasses?: string;
  children?: React.ReactNode;
} & InputProps;
