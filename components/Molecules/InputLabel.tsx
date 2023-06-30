'use client';
import React, { useState, useRef } from 'react';
import Text from '@/components/Atoms/Text';
import Input from '@/components/Atoms/Input';
import { twMerge } from 'tailwind-merge';
import { InputProps } from '@/components/Atoms/Input';
import clsx from 'clsx';
import Warning from '@/components/Atoms/Icons/Warning';

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
  required,
}: InputLabelProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(false);
  const [invalidMessage, setInvalidMessage] = useState<string>('');
  const classes = twMerge('flex flex-col', className);
  const textClasses = twMerge('flex focus:text-primary-500', labelClasses);
  const fieldClasses = twMerge('', inputClasses);

  const getClasses = (classes: string) =>
    clsx({
      [classes]: true,
      'text-primary-500': !invalid && focus,
      'text-label': !invalid && !focus,
      'text-warning': invalid,
    });

  const handleFocus = () => setFocus(!focus);

  const handleBlur = ({
    target: {
      validity: { valid },
    },
  }: React.FocusEvent<HTMLInputElement>) => {
    if (valid) {
      setInvalid(false);
      setInvalidMessage('');
    }
    setFocus(!focus);
  };

  const onInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { validationMessage },
    } = event;
    setInvalid(true);
    setInvalidMessage(validationMessage);
  };

  return (
    <div className={classes}>
      <Text as="label" className={getClasses(textClasses)}>
        {children ?? name ?? ''}{' '}
        {required && <span className="text-warning">*</span>}
      </Text>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx({
          [fieldClasses]: true,
          'border border-warning border-solid focus:border-warning': invalid,
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInvalid={onInvalid}
        required={required}
      />
      {invalid && (
        <span className="flex w-auto items-center mt-1 gap-[5px]">
          <Warning className="w-3 h-3" />
          <Text className={getClasses('text-xs')}>{invalidMessage}</Text>
        </span>
      )}
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
