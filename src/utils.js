export const checkWin = (board) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 2048) {
          return true;
        }
      }
    }
    return false;
  };
  
  export const checkLose = (board) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) return false;
        if (j < 3 && board[i][j] === board[i][j + 1]) return false;
        if (i < 3 && board[i][j] === board[i + 1][j]) return false;
      }
    }
    return true;
  };

export const generateInitialBoard = () => {
    const board = Array.from({ length: 4 }, () => Array(4).fill(0));
    return addRandomTile(addRandomTile(board));
  };
  
  export const addRandomTile = (board) => {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }
  
    // Check if there are no empty cells
    if (emptyCells.length === 0) {
      return null;  // Return null if no empty cells are available
    }
  
    const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[x][y] = Math.random() < 0.9 ? 2 : 4;
    return [...board];
  };
  
  
  export const handleBoardMovement = (e, board) => {
    let newBoard = JSON.parse(JSON.stringify(board));
    let points = 0;
  
    const moveTiles = (arr) => {
      let empty = 0;
      let tempPoints = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
          empty++;
        } else {
          if (empty > 0) {
            arr[i - empty] = arr[i];
            arr[i] = 0;
          }
        }
      }
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
          arr[i] *= 2;
          arr[i + 1] = 0;
          tempPoints += arr[i];
        }
      }
      return tempPoints;
    };
  
    switch (e.key) {
      case 'ArrowUp':
        for (let j = 0; j < 4; j++) {
          let column = [];
          for (let i = 0; i < 4; i++) {
            column.push(newBoard[i][j]);
          }
          points += moveTiles(column);
          for (let i = 0; i < 4; i++) {
            newBoard[i][j] = column[i];
          }
        }
        break;
      case 'ArrowDown':
        for (let j = 0; j < 4; j++) {
          let column = [];
          for (let i = 0; i < 4; i++) {
            column.push(newBoard[i][j]);
          }
          points += moveTiles(column.reverse());
          column.reverse();
          for (let i = 0; i < 4; i++) {
            newBoard[i][j] = column[i];
          }
        }
        break;
      case 'ArrowLeft':
        for (let i = 0; i < 4; i++) {
          points += moveTiles(newBoard[i]);
        }
        break;
      case 'ArrowRight':
        for (let i = 0; i < 4; i++) {
          points += moveTiles(newBoard[i].reverse());
          newBoard[i].reverse();
        }
        break;
      default:
        return null;
    }
  
    return {
      newBoard,
      points
    };
  };