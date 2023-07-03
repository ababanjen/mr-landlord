/* eslint-disable jsx-a11y/label-has-associated-control */
import { lowerCase } from "lodash";
import React from "react";
import { twMerge } from "tailwind-merge";

export type TextProps = {
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "label"
    | "p"
    | "link";
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const checkTag = (as?: string, tag?: string) =>
  lowerCase(tag) === lowerCase(as);
const heading = ["h1", "h2", "h3", "h4", "h5", "h6"];
export const isHeading = (as?: string) => heading.some(h => checkTag(as, h));

const Text = ({ as = "span", children, className, onClick }: TextProps) => {
  if (isHeading(as)) {
    const classes = twMerge("text-default", className);
    switch (as) {
      case "h1":
        return <h1 className={classes}>{children}</h1>;
      case "h2":
        return <h2 className={classes}>{children}</h2>;
      case "h3":
        return <h3 className={classes}>{children}</h3>;
      case "h4":
        return <h4 className={classes}>{children}</h4>;
      case "h5":
        return <h5 className={classes}>{children}</h5>;
      default:
        return <h6 className={classes}>{children}</h6>;
    }
  }

  if (checkTag(as, "p")) {
    const classes = twMerge("text-base text-default", className);
    return <p className={classes}>{children}</p>;
  }

  if (checkTag(as, "link")) {
    const classes = twMerge(
      "text-base text-default cursor-pointer hover:text-blue-400",
      className
    );
    return (
      <span className={classes} onClick={onClick} aria-hidden="true">
        {children}
      </span>
    );
  }

  if (checkTag(as, "label")) {
    const classes = twMerge("text-base text-label text-sm", className);
    return (
      <label className={classes} onClick={onClick} aria-hidden="true">
        {children}
      </label>
    );
  }

  const classes = twMerge("text-base text-default", className);
  return (
    <span className={classes} onClick={onClick} aria-hidden="true">
      {children}
    </span>
  );
};

export default Text;
