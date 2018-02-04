import React from 'react';
import PropTypes from 'prop-types';
import {GAME_STATES, ICONS, LEVEL_CONFIG} from '../constants.js';
import {Timer, TIMER_EVENT} from '../components/timer.jsx';
import {GAME_STATUS} from '../api/minesweeper.js';

const UI_STRINGS = {
    INSTRUCTIONS: 'Click + CTRL to add a',
    WIN: 'WINNER',
    LOST:  'loser'
};

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.timerEvent = TIMER_EVENT.STOP;
    }

    getStyles() {
        return {
            dashboard: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: 60,
                padding: 10,
                marginBottom: 20,
                background: '#484848',
                fontSize: '1.4em'
            },
            gameInfo: {
                border: ' 2px #268bd2 solid',
                borderRadius: 5,
                padding: 3,
                background: '#fff',
            },
            miniDash: {
                flexGrow: 1,
                padding: 3,
                margin: '0 10px',
                fontSize: '2em'
            },
            timerInfo: {
                border: ' 2px red solid',
                borderRadius: 5,
                padding: 3,
                background: '#fff',
            },
            instructions: {
                fontSize: '1em'
            },

            label: {
                flexGrow: 1,
                margin: '0 10px',
            },

        };
    }

    componentWillReceiveProps(props) {

        switch (props.gameState) {
        case GAME_STATES.RUNNING:
            this.timerEvent = TIMER_EVENT.START;
            break;
        case GAME_STATES.END:
            this.timerEvent = TIMER_EVENT.STOP;
            break;
        case GAME_STATES.RESET:
            this.timerEvent = TIMER_EVENT.RESET;
            break;
        default:
            this.timerEvent = TIMER_EVENT.END;
            break;
        }
    }

    miniDash(styles) {
        let gameStatus = this.props.gameStatus || -1;
        if(GAME_STATUS.WIN === gameStatus || GAME_STATUS.LOST === gameStatus) {
            var classes = GAME_STATUS.WIN === gameStatus ? 'text-red' : 'text-yellow';
            return (
                <div style={styles.miniDash}  className={'flex-row-container ' + classes}>
                    <b><i>{GAME_STATUS.WIN === gameStatus ? UI_STRINGS.WIN : UI_STRINGS.LOST}
                    </i></b>
                </div>);
        }
        else {
            return this.instructions(styles);
        }
    }

    instructions(styles) {
        return (
            <div style={styles.instructions}  className='text-yellow'>
                {UI_STRINGS.INSTRUCTIONS}&nbsp;&nbsp;
                <img src={ICONS.FLAG}/>
            </div>
        );
    }

    render() {
        let styles = this.getStyles();
        let gameCfg = LEVEL_CONFIG [this.props.level];

        return (
            <div className='dashboard' style={styles.dashboard}>
                <div style={styles.gameInfo}>
                    <div style={styles.bombIndicator} className='flex-row-container text-blue'>
                        <div style={styles.label}>{gameCfg.mineCount}</div>
                        <img src={ICONS.MINE}/>
                    </div>
                </div>
                <div >
                    {this.miniDash(styles)}
                </div>
                <div style={styles.timerInfo}>
                    <div className='text-red'>
                        <Timer timerEvent={this.timerEvent}/>
                    </div>
                </div>
            </div>
        );
    }
}


Dashboard.propTypes = {
    level: PropTypes.string,
    gameState: PropTypes.string,
    gameStatus:PropTypes.number
};
