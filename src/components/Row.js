import React from 'react';
import Cell from './Cell';
import styles from './Row.module.css';

const Row = ({ row }) => (
  <div className={styles.row}>
    {row.map((cell, j) => (
      <Cell key={j} cell={cell} />
    ))}
  </div>
);


export default Row;
