import React from 'react';
import Cell from './Cell';  // Import the Cell component
import styles from './Row.module.css';  // Import CSS styles for the Row component

// Define the Row component, which represents a row of cells in the game board
const Row = ({ row }) => (
  <div className={styles.row}>
    {/* Map through the 'row' prop, which is an array of cells in this row */}
    {row.map((cell, j) => (
      <Cell key={j} cell={cell} />  
    ))} {/* Render a Cell component for each cell in the row */}
  </div>
);

export default Row;  // Export the Row component for use in the Board component and elsewhere
