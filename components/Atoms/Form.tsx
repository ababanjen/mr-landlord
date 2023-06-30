import React from 'react';
const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      onSubmit(event);
    } catch (error) {
      console.info({ error });
    }
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;

export type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
