import { useState, useEffect } from "react";
import Node from "./Node";
import {
  getEmptyGrid,
  updateVisitedNode,
  rows,
  cols,
  isNeighborOfCurrent,
  END_NODE_ROW,
  END_NODE_COL,
} from "../helpers/gridHelpers";

const testGrid =
  '[[{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":0,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":1,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":2,"row":0},{"isStart":false,"isFinish":true,"isWall":false,"isCurrent":true,"isVisited":true,"col":3,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":4,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":5,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":6,"row":0}],[{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":0,"row":1},{"isStart":false,"isFinish":false,"isWall":true,"isCurrent":false,"isVisited":false,"col":1,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":2,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":3,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":4,"row":1},{"isStart":false,"isFinish":false,"isWall":true,"isCurrent":false,"isVisited":false,"col":5,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":6,"row":1}],[{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":0,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":1,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":2,"row":2},{"isStart":true,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":3,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":4,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":5,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":6,"row":2}]]';

export default function Grid(props) {
  const { isValidLevel, setIsValidLevel, setLevel } = props;

  const [grid, setGrid] = useState([]);
  // const [currentNode, setCurrentNode] = useState({});
  // const [startNode, setStartNode] = useState([START_NODE_ROW, START_NODE_COL]);
  const [endNode] = useState([END_NODE_ROW, END_NODE_COL]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const handleIsNeighbor = (row, col) => {
    if (isNeighborOfCurrent(grid, row, col)) {
      const current = isNeighborOfCurrent(grid, row, col);
      const updatedGrid = updateVisitedNode(grid, row, col, current);
      setGrid(updatedGrid);
    }
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const handleMouseDown = (row, col) => {
    if (isValidLevel === true) return;
    setMouseIsPressed(true);
    handleIsNeighbor(row, col);
  };

  const handleMouseEnter = (row, col) => {
    if (isValidLevel === true) return;
    if (!mouseIsPressed) return;
    handleIsNeighbor(row, col);
  };

  useEffect(() => {
    const fetchGrid = () => {
      let newGrid = getEmptyGrid(rows, cols);
      setGrid(newGrid);
    };
    if (!grid.length > 0) {
      fetchGrid();
    }
  }, []);

  useEffect(() => {
    const [row, col] = endNode;
    if (grid.length > 0 && grid[row][col]?.isCurrent === true) {
      setIsValidLevel(true);
      setLevel(grid);
    }
  }, [grid, endNode, setIsValidLevel, setLevel]);

  return (
    <div
      className={`grid grid-cols-${cols} grid-rows-${rows} border border-black shadow-lg`}
    >
      {grid.map((row, i) =>
        row.map((node, j) => (
          <Node
            key={`${i}-${j}`}
            {...node}
            handleMouseDown={handleMouseDown}
            handleMouseEnter={handleMouseEnter}
            handleMouseUp={handleMouseUp}
          />
        ))
      )}
    </div>
  );
}
