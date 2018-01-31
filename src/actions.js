import { ACTION_TYPE} from './constants';

const showMines = (row, col) => ({ type:  ACTION_TYPE.SHOW_MINES, payload: {row, col} });
const changeLevel = level => ({ type:  ACTION_TYPE.CHANGE_LEVEL, payload: level });

export default {
    showMines: showMines,
    changeLevel: changeLevel
};
