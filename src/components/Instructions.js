import React from 'react';
import styles from './Instructions.module.css';

const Instructions = () => (
  <div className={styles.instructionsContainer}>
    <h2 className={styles.title}>How to Play</h2>
    <ul className={styles.list}>
      <li>Use the <span className={styles.key}>Arrow Keys</span> to move the tiles.</li>
      <li>Tiles with the same number <span className={styles.merge}>merge</span> into one when they collide.</li>
      <li>Try to create a tile with the number <span className={styles.goal}>2048</span>.</li>
    </ul>
  </div>
);

export default Instructions;