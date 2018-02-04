/**
 * Created by bamorgans on 1/29/2018.
 */

const DEFAULT_MINE_COUNT = 10;
const DEFAULT_COLS = 9;
const DEFAULT_ROWS = 9;

export const GAME_STATUS = {
    IN_PROGRESS: 0,
    WIN: 1,
    LOST: 2
};

export const CELL_STATUS = {
    UNKNOWN: 0,
    OPENED:1,
    FLAGGED:2,
    EXPLODED: 3
};

// this is an offset array to find the adjacent cell for a cell on the board
const ADJ_CELLS_OFFSETS = Object.freeze([
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], /* the selected cell [0,0] */ [1, 0],
    [-1, 1],  [0, 1],  [1, 1],
]);

function createBoard(rows, cols, mineCount){
    const board = {
        cellsRowCol: {},
        adjCellsRowCol: {},
        minesRowCol: {},
    };

    // created the cells for the board
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // creating cell identifier
            const rowCol = [row, col].toString();

            // defaulting board cells
            board.cellsRowCol[rowCol] = {
                openedCount: -1,
                status: CELL_STATUS.UNKNOWN,
            };

            // creating map of the adjacent cell to the current cell at location (row, col)
            board.adjCellsRowCol[rowCol] = adjacentCellsRCs(rows, cols, row, col);
        }
    }
    // defining the location of the mines on the game board
    const rowCols = Object.keys(board.cellsRowCol);
    for (let i = 0; i < mineCount; i++) {
        const index = Math.floor(Math.random() * rowCols.length);
        board.minesRowCol[rowCols.splice(index, 1)[0]] = true;
    }

    return board;
}

/*---------------------- Cell related methods  ----------------------*/

function testCell (game, rowCol) {
    const cell = game.cellsRowCol[rowCol];
    if (cell.status === CELL_STATUS.OPENED) {
        return game;
    } else if (game.minesRowCol[rowCol]) {
        return {
            ...updateCell(game, rowCol, { ...cell, status: CELL_STATUS.EXPLODED }),
            status: GAME_STATUS.LOST,
        };
    } else {
        const adjCells = game.adjCellsRowCol[rowCol];
        const openedCount = countMines(game, adjCells);
        const nextGame = updateCell(game, rowCol, {
            status: CELL_STATUS.OPENED,
            openedCount,
        });

        if (isWinner(nextGame)) {
            return { ...nextGame, status: GAME_STATUS.WIN };
        } else if (openedCount === 0) {
            return testCells(nextGame, adjCells);
        }

        return nextGame;
    }
}

const updateCell = (game, rowCol, cell) => ({
    ...game,
    cellsRowCol: { ...game.cellsRowCol, [rowCol]: cell },
});

const testCells = (prev, rowCols) =>
    rowCols.reduce((game, rowCol) => {
        const cell = game.cellsRowCol[rowCol];
        if (cell && cell.status === CELL_STATUS.UNKNOWN) {
            return testCell(game, rowCol);
        }
        return game;
    }, prev);


const adjacentCellsRCs = (numRows,numCols, row, col) =>
    ADJ_CELLS_OFFSETS.reduce((rowCols, [rowOffset, colOffset]) => {
        const colAdj = col + colOffset;
        const rowAdj = row + rowOffset;
        if (colAdj > -1 && colAdj < numCols && rowAdj > -1 && rowAdj < numRows) {
            return rowCols.concat([rowAdj, colAdj].toString());
        }
        return rowCols;
    }, []);



/*---------------------- Helper  Methods  ----------------------*/
const isCellKnown = (status) =>
    (status === CELL_STATUS.OPENED || status === CELL_STATUS.EXPLODED);

function isWinner (game) {
    const unknownCells = Object.keys(game.cellsRowCol)
        .filter((rowCol) => !isCellKnown (game.cellsRowCol[rowCol].status));
    return (unknownCells.length === game.mineCount);
}

const countMines = (game, rowCols) =>
    rowCols.reduce((count, rowCol) => {
        return game.minesRowCol[rowCol] ? count + 1 : count;
    }, 0);



/*---------------------- Game API Methods  ----------------------*/

/**
 *   Call to create a new game board
 * @param rows  the number of rows for the game board
 * @param cols  he number of rows for the game board
 * @param mineCount
 * @returns return the game data object
 */
const create = (rows = DEFAULT_ROWS, cols = DEFAULT_COLS , mineCount = DEFAULT_MINE_COUNT) => ({
    ...createBoard(rows, cols, mineCount),
    status: GAME_STATUS.IN_PROGRESS,
    moveCount: 0,
    mineCount: mineCount,
    rows: rows,
    cols: cols,
});

/**
 * use open the updated cell and make the appropriate adjustment to the game board
 * @param game  this is an ojbect containing the game data
 * @param rowCol  a string specifying the row and column  which identifies the selected cell
 * @returns  the game data object
 */
const open = (game, rowCol) => ({
    ...testCell(game, rowCol),
    moveCount: game.moveCount + 1,
});


/**
 *  use to flag a cell to identify a mine on the game board
 * @param game  this is an ojbect containing the game data
 * @param rowCol  a string specifying the row and column  which identifies the selected cell
 * @returns the game data object
 */
function flag (game, rowCol) {
    const cell = game.cellsRowCol[rowCol];
    if (cell.status === CELL_STATUS.UNKNOWN) {
        return updateCell(game, rowCol, { ...cell, status: CELL_STATUS.FLAGGED });
    } else if (cell.status === CELL_STATUS.FLAGGED) {
        return updateCell(game, rowCol, { ...cell, status: CELL_STATUS.UNKNOWN });
    } else if (cell.status === CELL_STATUS.OPENED) {
        const unknownNeighbors = game.adjCellsRowCol[rowCol].filter(key =>
            game.cellsRowCol[key].status === CELL_STATUS.UNKNOWN);
        return testCells(game, unknownNeighbors);
    }
    return game;
}

export const minesweeper = {
    create : create,
    open: open,
    flag: flag
};
