/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-param-reassign */
import React from "react";

type DraggableContainerTypes = {
  children: React.ReactNode;
  onDrop: (event: React.DragEvent<HTMLDivElement>, data: string) => void;
};

const DraggableContainer = ({ children, onDrop }: DraggableContainerTypes) => {
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
      className="w-full border border-solid"
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
};
export const Draggable = ({ children, id }: DraggableTypes) => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    element.classList.add("dragged");
    event.dataTransfer.setData("text/plain", event.currentTarget.id);
    event.dataTransfer.effectAllowed = "move";
  };
  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) =>
    event.currentTarget.classList.remove("dragged");

  return (
    <div id={id} onDragStart={onDragStart} onDragEnd={onDragEnd} draggable>
      {children}
    </div>
  );
};
