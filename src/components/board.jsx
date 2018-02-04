/**
 * Created by bamorgans on 1/29/2018.
 */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {LEVEL_CONFIG} from '../constants.js';

import Cell from '../components/cell.jsx';
import {GAME_STATUS} from '../api/minesweeper.js';


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        if(!_.isEmpty(this.props.gameData) && !_.isEmpty(e.target)){
            let cellRowColKey = e.target.id;
            e.ctrlKey? this.props.setFlagHandler(cellRowColKey) : this.props.openCellHandler(cellRowColKey);
        }
    }

    render() {
        let levelCfg = LEVEL_CONFIG[this.props.level];
        let cellsRowCol = this.props.gameData.cellsRowCol || {};
        let minesRowCol = this.props.gameData.minesRowCol || {};
        let gameOver = this.props.gameData.status !== GAME_STATUS.IN_PROGRESS;
        return (
            <div>
                <div className='board'>
                    {Array(levelCfg.rows).fill(1).map((rowData, row) => {
                        return (
                            <div key={row} className='board'>
                                {Array(levelCfg.cols).fill(1).map((value, col) => {
                                    let key = row.toString() + ',' + col.toString();
                                    let isMine = minesRowCol[key] && gameOver;
                                    return <Cell
                                        id={key}
                                        key={key}
                                        isMine={isMine}
                                        cellData={cellsRowCol[key]}
                                        onClick={this.onClickHandler}/>;
                                })}
                            </div>);
                    })}
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    level:PropTypes.string,
    gameData:PropTypes.object,
    gameState: PropTypes.string,
    setFlagHandler: PropTypes.func,
    openCellHandler:PropTypes.func
};

