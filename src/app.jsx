/**
 * Created by bamorgans on 1/29/2018.
 */
import React from 'react';
import store from './store.js';
import Header from './components/header.jsx';
import Dashboard from './components/dashboard.jsx';
import Board from './components/board.jsx';

export default class App extends React.Component {
    render() {
        let gameData = store.getState();
        return <div>
            <Header level={gameData.level}/>
            <Dashboard/>
            <Board/>
        </div>;
    }
}

