/**
 * Created by bamorgans on 1/29/2018.
 */
import React from 'react';
import Board from './components/board.jsx';
import Header from './components/header.jsx';

export default class App extends React.Component {
    render() {
        return <div>
            <Header>
            </Header>
            <Board>
                <div>bob</div>
                <div>tom</div>
            </Board>
        </div>;
    }
}

