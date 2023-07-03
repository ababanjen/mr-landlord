/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { twMerge } from "tailwind-merge";
import Text, { TextProps } from "@/components/Atoms/Text";
import Input, { InputProps } from "@/components/Atoms/Input";

export type CheckBoxProps = {
  className?: string;
  children?: React.ReactNode;
} & TextProps &
  InputProps;

const CheckBox = ({
  className,
  children,
  name,
  value,
  onChange,
}: CheckBoxProps) => {
  const classes = twMerge("flex gap-2 w-full", className);
  return (
    <div className={classes}>
      <Input
        type="checkbox"
        className="w-[20px]"
        name={name}
        value={value}
        onChange={onChange}
      />
      <Text className="flex items-center">{children ?? name ?? ""}</Text>
    </div>
  );
};

export default CheckBox;
