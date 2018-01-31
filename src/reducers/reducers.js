import {ACTION_TYPE} from '../constants';

const initialState = {
    board: {},
    mines: {},
    level: 9
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case ACTION_TYPE.CHANGE_LEVEL:
        return {...state, level: action.payload};
    case ACTION_TYPE.SHOW_MINES:
        return {...state, board: [...state.board, action.payload]};
    default:
        return state;
    }
};
export default rootReducer;
