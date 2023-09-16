import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Instructions from './components/Instructions';
import { generateInitialBoard, addRandomTile, handleBoardMovement, checkWin, checkLose } from './utils';
import styles from './App.module.css';

const App = () => {
  const [board, setBoard] = useState(generateInitialBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resetGame = () => {
    setBoard(generateInitialBoard());
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver || gameWon) return;
      const result = handleBoardMovement(e, board);
      if (result) {
        const { newBoard, points } = result;
        if (newBoard) {
          const updatedBoard = addRandomTile(newBoard);
          if (updatedBoard) {
            setBoard(updatedBoard);
            setScore(score + points);
            if (checkWin(updatedBoard)) {
              setGameWon(true);
            } else if (checkLose(updatedBoard)) {
              setGameOver(true);
            }
          } else {
            setGameOver(true);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [board, score, gameOver, gameWon]);

  return (
    <div className={styles.App}>
      <h1>2048</h1>
      <div className={styles.scoreBoard}>Score: <span className={styles.score}>{score}</span></div>
      <Instructions />
      <Board board={board} />
      {gameWon && <div className={styles.winMessage}>Congratulations, you won!</div>}
      {gameOver && <div className={styles.loseMessage}>Game Over!</div>}
      {(gameWon || gameOver) && <button className={styles.restartButton} onClick={resetGame}>Restart</button>}
    </div>
  );
};

export default App;
