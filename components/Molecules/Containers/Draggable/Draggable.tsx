/* eslint-disable no-param-reassign */
import React from "react";

type DraggableTypes = {
  children: React.ReactNode;
  id: string;
};
const Draggable = ({ children, id }: DraggableTypes) => {
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
export default Draggable;
