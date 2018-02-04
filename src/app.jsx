/**
 * Created by bamorgans on 1/29/2018.
 */
import _ from 'lodash';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {GAME_STATES} from './constants.js';
import store from './store.js';
import actions from './actions.js';

import Header from './components/header.jsx';
import Dashboard from './components/dashboard.jsx';
import Board from './components/board.jsx';
import {minesweeper, GAME_STATUS} from './api/minesweeper.js';
import {LEVEL_CONFIG} from './constants.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.changeLevelHandler = this.changeLevelHandler.bind(this);
        this.newGameHandler = this.newGameHandler.bind(this);
        this.setFlagHandler = this.setFlagHandler.bind(this);
        this.openCellHandler = this.openCellHandler.bind(this);
    }

    changeLevelHandler(e) {
        if (e.target && e.target.value) {
            store.dispatch(actions.setLevel(e.target.value));
        }
    }

    newGameHandler(e) {
        if (e.target && this.props) {
            let gameState = GAME_STATES.END;
            let gameData = {};
            if(_.includes([GAME_STATES.END, GAME_STATES.RESET],this.props.gameState)) {
                gameState = GAME_STATES.RUNNING;
                let levelCfg = LEVEL_CONFIG[this.props.level];
                gameData = minesweeper.create(levelCfg.rows, levelCfg.cols, levelCfg.mineCount);
            }
            store.dispatch(actions.updateGame(gameState, gameData));
        }
    }

    openCellHandler (cellRowCol) {
        if(cellRowCol && GAME_STATUS.IN_PROGRESS === this.props.gameData.status ) {
            let gameData = minesweeper.open(this.props.gameData,cellRowCol);

            // checking if the game is over
            let gameState = GAME_STATUS.IN_PROGRESS !== gameData.status ?
                GAME_STATES.END : this.props.gameState;

            store.dispatch(actions.updateGame(gameState, gameData));
        }
    }
    setFlagHandler (cellRowCol) {
        if(cellRowCol && GAME_STATUS.IN_PROGRESS === this.props.gameData.status) {
            let gameData = minesweeper.flag(this.props.gameData,cellRowCol);
            store.dispatch(actions.updateGame(this.props.gameState, gameData));
        }
    }
    render() {

        return <div>
            <Header
                level={this.props.level}
                gameState={this.props.gameState}
                newGameHandler={this.newGameHandler}
                changeLevelHandler={this.changeLevelHandler}
            />
            <Dashboard
                level={this.props.level}
                gameState={this.props.gameState}
            />
            <Board
                level={this.props.level}
                gameData={this.props.gameData}
                gameState={this.props.gameState}
                openCellHandler = {this.openCellHandler}
                setFlagHandler = {this.setFlagHandler}
            />
        </div>;
    }
}

App.propTypes = {
    level: PropTypes.string,
    gameState: PropTypes.string,
    gameData: PropTypes.object
};


const mapStateToProps = state => {
    return {...state};
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

