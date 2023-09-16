# 2048 Game in React

## Author
Tyler Te

## Description
This is a React-based implementation of the popular 2048 game. The game board consists of a 4x4 grid where you can slide tiles to merge them and reach the number 2048.

## Live Demo
[Play the game here](https://2048-tylerte.netlify.app/)

## Features
- 4x4 game board
- Arrow key controls
- Score tracking
- Win and lose conditions

## How to Play
1. Use the arrow keys to move the tiles.
2. Tiles with the same number will merge into one when they collide.
3. Try to create a tile with the number 2048 to win the game.

## Installation and Setup
1. Clone the repository
   ```
git clone https://github.com/TyTe108/2048.git
   ```
2. Navigate to the project directory
   ```
cd 2048
   ```
3. Install dependencies
   ```
npm install
   ```
4. Start the development server
   ```
npm start
   ```
5. Open your browser and go to `http://localhost:3000`

## Technologies Used
- React
- CSS Modules

## File Structure
- `src/App.js`: Main application file
- `src/components/Board.js`: Game board component
- `src/components/Cell.js`: Individual cell component
- `src/components/Row.js`: Row component
- `src/components/Instructions.js`: Instructions component
- `src/utils.js`: Utility functions for game logic

## License
MIT