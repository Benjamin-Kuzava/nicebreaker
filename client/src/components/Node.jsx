import React from "react";
import "../App.css";

export default function Node(props) {
  const {
    isStart,
    isFinish,
    isWall,
    isCurrent,
    isVisited,
    col,
    row,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
  } = props;

  const utilityClass = isStart
    ? "start-node"
    : isFinish
    ? "finish-node"
    : isWall
    ? "wall-node"
    : isCurrent
    ? "current-node"
    : isVisited
    ? "visited-node"
    : "";

  let width = 16;
  let height = 16;

  return (
    <div
      className={`w-${width} h-${height} cursor-pointer border border-black-light flex justify-center items-center ${utilityClass}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={handleMouseUp}
    />
  );
}
