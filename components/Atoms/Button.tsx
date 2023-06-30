import { twMerge } from "tailwind-merge";

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

  return (
    <button
      type={type}
      className={inputClasses}
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
  type?: "submit" | "reset" | "button";
  label?: string;
  children?: React.ReactNode | string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
