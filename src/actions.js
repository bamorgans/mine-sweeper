/**
 * Created by bamorgans on 1/29/2018.
 */

import {ACTION_TYPE} from './constants.js';

//Redux Store Action Creators
const newGame = gameState => ({type: ACTION_TYPE.NEW_GAME, payload: gameState});
const setLevel = level => ({type: ACTION_TYPE.SET_LEVEL, payload: level});
const addFlag = (row, col) => ({type: ACTION_TYPE.ADD_FLAG, payload: {row: row, col: col}});
const openCell = (row, col) => ({type: ACTION_TYPE.OPEN_CELL, payload: {row: row, col: col}});


export default {
    newGame: newGame,
    setLevel:setLevel,
    addFlag: addFlag,
    openCell: openCell,

};
