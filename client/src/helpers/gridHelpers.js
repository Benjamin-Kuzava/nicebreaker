export const rows = 3;
export const cols = 7;
export const START_NODE_ROW = 2;
export const START_NODE_COL = 3;
export const END_NODE_ROW = 0;
export const END_NODE_COL = 3;

export const createNode = (row, col) => {
  const start = row === START_NODE_ROW && col === START_NODE_COL;
  const end = row === END_NODE_ROW && col === END_NODE_COL;

  return {
    isStart: start,
    isFinish: end,
    isWall: false,
    isCurrent: start,
    isVisited: start,
    col: col,
    row: row,
  };
};

// Initalize empty grid
export const getEmptyGrid = (numRows, numCols) => {
  let grid = [];
  for (let row = 0; row < numRows; row++) {
    const currentRow = [];
    for (let col = 0; col < numCols; col++) {
      currentRow.push(createNode(row, col));
    }
    console.log(currentRow.length);
    grid.push(currentRow);
  }
  return grid;
};

// Update grid with toggled wall
const getGridWithUpdatedWall = (grid, row, col) => {
  const updatedGrid = grid.slice();
  const node = updatedGrid[row][col];
  const updatedNode = {
    ...node,
    isWall: !node.isWall,
  };
  updatedGrid[row][col] = updatedNode;
  return updatedGrid;
};

export const fillGridWithWalls = (grid) => {
  const updatedGrid = grid.slice();
  for (let row in grid) {
    for (let col in grid[row]) {
      const node = updatedGrid[row][col];
      if (node.isWall === false && node.isVisited === false) {
        const newWall = {
          ...node,
          isWall: true,
        };
        updatedGrid[row][col] = newWall;
      }
    }
  }
  return updatedGrid;
};

// Return grid with new current node
export const updateVisitedNode = (grid, row, col, current) => {
  const updatedGrid = grid.slice();
  const node = updatedGrid[row][col];
  const currentNode = updatedGrid[current.row][current.col];
  const updatedNode = {
    ...node,
    isVisited: true,
    isCurrent: true,
  };
  const oldCurrent = {
    ...currentNode,
    isCurrent: false,
  };
  updatedGrid[row][col] = updatedNode;
  updatedGrid[current.row][current.col] = oldCurrent;
  return updatedGrid;
};

function isInBounds(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[x].length;
}

// Returns either the current node or false
export function isNeighborOfCurrent(grid, row, col) {
  if (grid[row][col].isVisited === true) return false;

  const neighbors = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let neighbor of neighbors) {
    const [x, y] = neighbor;
    const newX = row + x;
    const newY = col + y;

    if (isInBounds(grid, newX, newY)) {
      if (grid[newX][newY].isCurrent) {
        return grid[newX][newY];
      }
    }
  }

  return false;
}
