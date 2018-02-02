import {ACTION_TYPE, GAME_LEVEL} from '../constants';

const initialState = {
    board: {},
    mines: {},
    level: GAME_LEVEL.EXPERT
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case ACTION_TYPE.SET_LEVEL:
        return {...state, level: action.payload};
    case ACTION_TYPE.SHOW_MINES:
        return {...state, board: [...state.board, action.payload]};
    default:
        return state;
    }
};
export default rootReducer;
