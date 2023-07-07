/* eslint-disable no-alert */
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
      alert(error);
    }
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
