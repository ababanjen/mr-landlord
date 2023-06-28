import Text, { TextProps } from "@/components/Atoms/Text";
import Input, { InputProps } from "@/components/Atoms/Input";
import { twMerge } from "tailwind-merge";

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

export type CheckBoxProps = {
  className?: string;
  children?: any;
} & TextProps &
  InputProps;
