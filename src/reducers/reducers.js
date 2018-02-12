import {ACTION_TYPE, GAME_LEVEL, GAME_STATES} from '../constants.js';

const initialState = {
    level: GAME_LEVEL.BEGINNER,
    gameState: GAME_STATES.END,
    gameData: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case ACTION_TYPE.SET_LEVEL:
        return {...state, level: action.payload, gameState: GAME_STATES.RESET, gameData:{}};

    case ACTION_TYPE.UPDATE_GAME:
        return {...state, gameState: action.payload.gameState, gameData:action.payload.gameData};

    default:
        return state;
    }
};
export default rootReducer;
