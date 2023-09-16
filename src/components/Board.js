import React from 'react';
import Row from './Row';
import styles from './Board.module.css';

const Board = ({ board }) => (
    <div className={styles.board}>
      {board.map((row, i) => (
        <Row key={i} row={row} />
      ))}
    </div>
  );

export default Board;
