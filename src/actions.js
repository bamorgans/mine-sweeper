/**
 * Created by bamorgans on 1/29/2018.
 */

import {ACTION_TYPE} from './constants.js';

//Redux Store Action Creators
const setLevel = level => ({type: ACTION_TYPE.SET_LEVEL, payload: level});
const updateGame = (gameState,gameData) => ({type: ACTION_TYPE.UPDATE_GAME, payload: {gameState:gameState, gameData:gameData}});

export default {
    setLevel:setLevel,
    updateGame: updateGame
};
