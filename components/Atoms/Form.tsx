import React from "react";
const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;

export type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
