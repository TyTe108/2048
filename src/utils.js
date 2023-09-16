// Utility function to check if the player has won the game by reaching 2048
export const checkWin = (board) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 2048) {
          return true;  // Player has won by reaching 2048
        }
      }
    }
    return false;  // Player has not won yet
  };
  
  // Utility function to check if the player has lost the game (no more valid moves)
  export const checkLose = (board) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) return false;  // If there's an empty cell, the game is not lost
        if (j < 3 && board[i][j] === board[i][j + 1]) return false;  // If adjacent tiles can merge horizontally, the game is not lost
        if (i < 3 && board[i][j] === board[i + 1][j]) return false;  // If adjacent tiles can merge vertically, the game is not lost
      }
    }
    return true;  // Player has lost the game (no valid moves left)
  };
  
  // Utility function to generate the initial game board with two random tiles
  export const generateInitialBoard = () => {
    const board = Array.from({ length: 4 }, () => Array(4).fill(0));  // Create an empty 4x4 board
    return addRandomTile(addRandomTile(board));  // Add two random tiles to the board
  };
  
  // Utility function to add a random tile (2 or 4) to the game board
  export const addRandomTile = (board) => {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) {
          emptyCells.push([i, j]);  // Store the coordinates of empty cells
        }
      }
    }
  
    // Check if there are no empty cells
    if (emptyCells.length === 0) {
      return null;  // Return null if no empty cells are available (game over)
    }
  
    const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[x][y] = Math.random() < 0.9 ? 2 : 4;  // Assign a random tile (2 or 4) to an empty cell
    return [...board];  // Return the updated board
  };
  
  // Utility function to handle board movement based on the player's keypress
  export const handleBoardMovement = (e, board) => {
    let newBoard = JSON.parse(JSON.stringify(board));  // Clone the current board to avoid mutating the original
    let points = 0;  // Initialize points to track the score
  
    // Utility function to move and merge tiles in an array
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
  
    // Handle different arrow key inputs
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
        return null;  // Invalid key input, do nothing
    }
  
    return {
      newBoard,
      points
    };
  };
  