#MineSweeper

This is a classic MineSweeper game. The game consists of a 9x9 grid of squares, with 10 “mines” randomly hidden in 10 of the squares. 
- The user clicks on a squares to uncover them. Each time:
- If the square contains a mine, the user loses and game is over!
- If the square is adjacent to a mine, the square displays the total number of mines in the 8 squares around it
- If the square is neither a mine or adjacent to a mine, the square displays a blank, and should behave as if the 8 adjacent squares were also clicked (recursively applying this algorithm)

The user wins when they uncover all squares that don’t have mines.


## Requirements
Features to cover in your implementation:

- Add mine flagging (i.e. a way for users to indicate where they think the mines are)
- Add a timer
- Add some animations (e.g. when uncovering empty regions)
- Add a way for users to choose a difficulty level (e.g. board size and mine count)
- Different numbered cells should be represented by a different color (e.g. 1s are red, 2s are purple, etc. see example picture)
- Do something fun when the user wins or loses, and show the mines!


## Technologies Used

Projects utilized ES6 syntax, JSX, React-Router, Redux, ESLint, Mocha

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for development and debugging.<br>

