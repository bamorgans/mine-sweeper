import React from 'react';
import PropTypes from 'prop-types';
import {GAME_STATES, ICONS, LEVEL_CONFIG} from '../constants.js';
import {Timer, TIMER_EVENT} from '../components/timer.jsx';


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
                background: '#484848'
            },
            gameInfo: {
                border: ' 2px #268bd2 solid',
                borderRadius: 5,
                padding: 3,
                background: '#fff',
            },
            timerInfo: {
                border: ' 2px red solid',
                borderRadius: 5,
                padding: 3,
                background: '#fff',
            },
            elapsedTime: {
                color: 'red',
                fontSize: '1.4em'
            },

            label: {
                flexGrow: 1,
                margin: '0 10px',
                fontSize: '1.4em'

            }
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

    render() {
        let styles = this.getStyles();
        let gameCfg = LEVEL_CONFIG [this.props.level];
        return (
            <div className='dashboard' style={styles.dashboard}>
                <div style={styles.gameInfo}>
                    <div className='flex-row-container text-blue'>
                        <div style={styles.label}>{gameCfg.mineCount}</div>
                        <img src={ICONS.MINE}/>
                    </div>
                </div>
                <div className='text-yellow'>
                    Click + CTRL to add a&nbsp;&nbsp;
                    <img src={ICONS.FLAG}/>
                </div>
                <div style={styles.timerInfo}>
                    <div className='text-red' style={styles.elapsedTime}>
                        <Timer timerEvent={this.timerEvent}/>
                    </div>
                </div>
            </div>
        );
    }
}


Dashboard.propTypes = {
    level: PropTypes.string,
    gameState: PropTypes.string
};
