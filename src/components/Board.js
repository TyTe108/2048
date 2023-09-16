import React from 'react';
import Row from './Row';
import styles from './Board.module.css';

const Board = ({ board }) => (
    <div className={styles.board}>
    {/* Map through the 'board' prop, which is a 2D array of tiles */}
      {board.map((row, i) => (
        <Row key={i} row={row} /> 
      ))} {/* Render a Row component for each row in the board */}
    </div>
  );

export default Board; // Export the Board component for use in the main App component and elsewhere
