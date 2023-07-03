import React from "react";

export type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      onSubmit(event);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
      // console.info({ error });
    }
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
