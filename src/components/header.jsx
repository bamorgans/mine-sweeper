/**
 * Created by bamorgans on 1/29/2018.
 */

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {GAME_STATES} from '../constants.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.changeLevelHandler = this.props.changeLevelHandler;
        this.newGameHandler = this.props.newGameHandler;
    }

    getStyles() {
        return {
            header: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: 45,
                padding: 10,
                background: '#212121'
            },
            title: {
                color: '#fff',
                fontSize: '1.5em',
                flexGrow: 2
            },

            levelContainer: {
                flexGrow: 1,
            },

            buttonContainer: {
                flexGrow: 0
            }
        };
    }

    render() {
        let styles = this.getStyles();
        return (
            <div style={styles.header}>
                <div style={styles.title}>MineSweeper</div>
                <div style={styles.levelContainer}>
                    <select className='combobox' value={this.props.level} onChange={this.changeLevelHandler}>
                        <option value='beginner'>Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='expert'>Expert</option>
                    </select>
                </div>
                <div style={styles.buttonContainer}>
                    <button id='newGameBtn' className='button' onClick={this.newGameHandler}>
                        {_.includes([GAME_STATES.END,GAME_STATES.RESET], this.props.gameState) ? 'New Game' : '  Quit  '}</button>
                </div>
            </div>
        );
    }
}


Header.propTypes = {
    level: PropTypes.string,
    gameState: PropTypes.string,
    changeLevelHandler: PropTypes.func.isRequired,
    newGameHandler:PropTypes.func.isRequired
};
