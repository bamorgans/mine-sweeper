/**
 * Created by bamorgans on 1/29/2018.
 */

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


class App extends React.Component {
    constructor(props) {
        super(props);
        this.changeLevelHandler = this.changeLevelHandler.bind(this);
        this.newGameHandler = this.newGameHandler.bind(this);
    }

    changeLevelHandler(e) {
        if (e.target && e.target.value) {
            store.dispatch(actions.setLevel(e.target.value));
        }
    }

    newGameHandler(e) {
        if (e.target && this.props) {
            store.dispatch(actions.newGame(GAME_STATES.END == this.props.gameState ?
                GAME_STATES.RUNNING : GAME_STATES.END));

        }
    }

    openCellHandler (cellRowCol) {

        if(cellRowCol) {
            store.dispatch(actions.openCell({...cellRowCol}));
        }
    }
    setFlagHandler (cellRowCol) {
        if(cellRowCol) {
            store.dispatch(actions.setFlag({...cellRowCol}));
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
            <Board level={this.props.level} gameData={this.props.gameData}/>
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

