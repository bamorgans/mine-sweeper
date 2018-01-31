import {ACTION_TYPE} from './constants';

const newGame = level => ({type: ACTION_TYPE.NEW_GAME, payload: level});
const setLevel = level => ({type: ACTION_TYPE.SET_LEVEL, payload: level});
const selectCell = (row, col) => ({type: ACTION_TYPE.SELECT_CELL, payload: {row, col}});
const showCell = (row, col) => ({type: ACTION_TYPE.SHOW_CELL, payload: {row, col}});
const setMines = numberOfMines => ({type: ACTION_TYPE.SET_MINES, payload : numberOfMines});
const showMines = (timeExpired) => ({type: ACTION_TYPE.SHOW_MINES, payload: timeExpired});

export default {
    newGame: newGame,
    setLevel: setLevel,
    selectCell: selectCell,
    showCell: showCell,
    setMines: setMines,
    showMines: showMines
};
