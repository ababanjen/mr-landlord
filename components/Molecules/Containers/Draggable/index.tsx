/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-param-reassign */
import React from "react";
import { twMerge } from "tailwind-merge";

type DraggableContainerTypes = {
  children: React.ReactNode;
  onDrop: (event: React.DragEvent<HTMLDivElement>, data: string) => void;
  className?: string;
};

const DraggableContainer = ({
  children,
  onDrop,
  className,
}: DraggableContainerTypes) => {
  const classes = twMerge("w-full min-h-[5rem]", className);
  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    const newTarget = event.relatedTarget as HTMLDivElement;
    if (newTarget?.parentNode === currentTarget || newTarget === currentTarget)
      return;
    event.preventDefault();
    event.currentTarget.classList.remove("dragged-over");
  };

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add("dragged-over");
    event.dataTransfer.dropEffect = "move";
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) =>
    event.currentTarget.classList.remove("dragged");

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const onDropEvent = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove("dragged-over");
    const data = event.dataTransfer.getData("text/plain");
    onDrop(event, data);
  };

  return (
    <div
      className={classes}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDropEvent}
    >
      {children}
    </div>
  );
};

export default DraggableContainer;

type DraggableTypes = {
  children: React.ReactNode;
  id: string;
  className?: string;
  style?: object;
};
export const Draggable = ({
  children,
  id,
  className,
  style,
}: DraggableTypes) => {
  const classes = twMerge("cursor-pointer", className);
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    element.classList.add("dragged");
    event.dataTransfer.setData("text/plain", event.currentTarget.id);
    event.dataTransfer.effectAllowed = "move";
  };
  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) =>
    event.currentTarget.classList.remove("dragged");

  return (
    <div
      className={classes}
      id={id}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={style}
      draggable
    >
      {children}
    </div>
  );
};
