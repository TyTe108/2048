import React, { useState, useEffect } from 'react';
import Board from './components/Board';  // Import the game board component
import Instructions from './components/Instructions';  // Import the game instructions component
import { generateInitialBoard, addRandomTile, handleBoardMovement, checkWin, checkLose } from './utils';  // Import utility functions for the game
import styles from './App.module.css';  // Import CSS styles

// Define the main App component
const App = () => {
  // Initialize state variables using useState hook
  const [board, setBoard] = useState(generateInitialBoard());  // Store the game board
  const [score, setScore] = useState(0);  // Store the player's score
  const [gameOver, setGameOver] = useState(false);  // Flag to track if the game is over
  const [gameWon, setGameWon] = useState(false);  // Flag to track if the game is won

  // Function to reset the game
  const resetGame = () => {
    setBoard(generateInitialBoard());  // Reset the game board
    setScore(0);  // Reset the player's score
    setGameOver(false);  // Set game over flag to false
    setGameWon(false);  // Set game won flag to false
  };

  // useEffect hook to handle keyboard input and game logic
  useEffect(() => {
    // Function to handle keydown events
    const handleKeyDown = (e) => {
      if (gameOver || gameWon) return;  // If the game is over or won, do nothing

      // Call handleBoardMovement function to handle board movement based on key press
      const result = handleBoardMovement(e, board);

      if (result) {
        const { newBoard, points } = result;

        if (newBoard) {
          const updatedBoard = addRandomTile(newBoard);

          if (updatedBoard) {
            setBoard(updatedBoard);  // Update the game board
            setScore(score + points);  // Update the player's score

            // Check if the player has won the game
            if (checkWin(updatedBoard)) {
              setGameWon(true);  // Set the game won flag to true
            }
            // Check if the player has lost the game
            else if (checkLose(updatedBoard)) {
              setGameOver(true);  // Set the game over flag to true
            }
          } else {
            setGameOver(true);  // Set the game over flag to true
          }
        }
      }
    };

    // Add event listener for keydown events
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [board, score, gameOver, gameWon]);  // Specify dependencies for the useEffect hook

  // Render the main component with JSX
  return (
    <div className={styles.App}>
      <h1>2048</h1>
      <div className={styles.scoreBoard}>Score: <span className={styles.score}>{score}</span></div>
      <Instructions />  {/* Render game instructions component */}
      <Board board={board} />  {/* Render the game board component */}
      {gameWon && <div className={styles.winMessage}>Congratulations, you won!</div>}  {/* Render win message when game is won */}
      {gameOver && <div className={styles.loseMessage}>Game Over!</div>}  {/* Render game over message when game is lost */}
      {(gameWon || gameOver) && <button className={styles.restartButton} onClick={resetGame}>Restart</button>}  {/* Render restart button when the game is over or won */}
    </div>
  );
};

export default App;  // Export the main App component for use in other parts of the application
