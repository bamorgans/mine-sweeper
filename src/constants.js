/**
 * Created by bamorgans on 1/29/2018.
 */

export const ACTION_TYPE = {
    SET_LEVEL:   'set level',
    UPDATE_GAME: 'update game'
};

export const GAME_LEVEL = {
    BEGINNER:       'beginner',
    INTERMEDIATE:   'intermediate',
    EXPERT:         'expert'
};

export const GAME_STATES = {
    END:        'end',
    RESET:      'reset',
    RUNNING:    'running',
    PAUSED:     'paused'
};

export const ICONS = {
    MINE: './static/img/mine_32.png',
    FLAG: './static/img/flag_red_32.png'
};

export const LEVEL_CONFIG = {
    /*beginner:       {rows:  3, cols:  3, mineCount: 1},*/
    beginner:       {rows:  9, cols:  9, mineCount: 10},
    intermediate:   {rows: 16, cols: 16, mineCount: 40},
    expert:         {rows: 24, cols: 24, mineCount: 99}
};

export const CELL_COLORMAP = {
    '-1': 'bkgd-brown',
    '1': 'bkgd-blue',
    '2': 'bkgd-green',
    '3': 'bkgd-red',
    '4': 'bkgd-violet',
    '5': 'bkgd-magenta',
    '6': 'bkgd-cyan',
    '7': 'bkgd-yellow',
    '8': 'bkgd-black'
};
