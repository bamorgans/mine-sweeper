/**
 * Created by bamorgans on 1/29/2018.
 */

export const ACTION_TYPE = {
    NEW_GAME:   'new game',
    SET_LEVEL:  'set level',
    ADD_FLAG:   'add flag',
    OPEN_CELL:  'open cell'
};

export const CELL_TYPE = {
    MINE:       'mines',
    FLAG:       'flags',
    TEXT:       'text',
    UNKNOWN:    'unknown',
    OPEN:       'open'
};

export const GAME_LEVEL = {
    BEGINNER:       'beginner',
    INTERMEDIATE:   'intermediate',
    EXPERT:         'expert'
};

export const GAME_STATES = {
    END:        'end',
    RUNNING:    'running',
    PAUSED:     'paused'
};

export const ICONS = {
    MINE: './static/img/mine_32.png',
    FLAG: './static/img/flag_red_32.png'
};

export const LEVEL_CONFIG = {
    beginner:       {rows:  9, cols:  9, mineCount: 10},
    intermediate:   {rows: 16, cols: 16, mineCount: 40},
    expert:         {rows: 24, cols: 24, mineCount: 99}
};
