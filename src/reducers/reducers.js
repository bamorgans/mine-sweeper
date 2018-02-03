import {ACTION_TYPE, GAME_LEVEL, GAME_STATES} from '../constants.js';

const initialState = {
    level: GAME_LEVEL.BEGINNER,
    gameState: GAME_STATES.END,
    gameData: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case ACTION_TYPE.NEW_GAME:
        return {...state, gameState: action.payload};

    case ACTION_TYPE.SET_LEVEL:
        return {...state, level: action.payload, gameState: GAME_STATES.END};

    case ACTION_TYPE.ADD_FLAG:
        return {...state, board: [...state.board, action.payload]};

    case ACTION_TYPE.OPEN_CELL:
        return {...state, board: [...state.board, action.payload]};

    default:
        return state;
    }
};
export default rootReducer;
