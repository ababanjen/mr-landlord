import React from 'react';
import { twMerge } from 'tailwind-merge';
const Box = ({ children, className }: DSCTypes) => {
  const classes = twMerge(
    'rounded p-4 text-default border-[0.5px] min-w-[40%] w-auto h-auto shadow',
    className,
  );
  return <div className={classes}>{children}</div>;
};

export default Box;

type DSCTypes = {
  children: React.ReactNode;
  className?: string;
};
