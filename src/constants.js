
//redux actions
export const ACTION_TYPE = {
    SET_LEVEL: 'set level',
    SELECT_CELL: 'select cell',
    SHOW_CELL: 'show cell',
    SET_MINES: 'set mines',
    SHOW_MINES: 'show mines'
};

export const CELL_TYPE = {
    MINE: 'mines',
    FLAG: 'flags',
    TEXT: 'text',
    UNKNOWN: 'unknown',
    OPEN: 'open'

};

export const GAME_LEVEL = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    EXPERT: 'expert'
};
