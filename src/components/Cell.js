import React from 'react';
import styles from './Cell.module.css';

// Define the Cell component, which represents a single cell in the game board
const Cell = ({ cell }) => (
  <div className={styles.cell} data-value={cell}>
    {/* Display the cell value if it's not 0, otherwise display an empty string */}
    {cell !== 0 ? cell : ''}
  </div>
);

export default Cell;  // Export the Cell component for use in other parts of the application
