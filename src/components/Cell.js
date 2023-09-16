import React from 'react';
import styles from './Cell.module.css';

const Cell = ({ cell }) => (
  <div className={styles.cell} data-value={cell}>
    {cell !== 0 ? cell : ''}
  </div>
);

export default Cell;
