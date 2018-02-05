/**
 * Created by bamorgans on 1/29/2018.
 */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {ICONS, LEVEL_CONFIG} from '../constants.js';

import Cell from '../components/cell.jsx';
import {CELL_STATUS, GAME_STATUS} from '../api/minesweeper.js';

const ICONS_CELL_STATUS_MAP ={};
ICONS_CELL_STATUS_MAP [CELL_STATUS.FLAGGED] = ICONS.FLAG;
ICONS_CELL_STATUS_MAP [CELL_STATUS.EXPLODED] = ICONS.MINE;

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
        let rowWidth = 40*levelCfg.rows;
        return (
            <div className='.flex-row-container' style={{minWidth: rowWidth + 'px'}}>
                {Array(levelCfg.rows).fill(1).map((rowData, row) => {
                    return (
                        <div key={row} className='board'>
                            {Array(levelCfg.cols).fill(1).map((value, col) => {
                                let key = row.toString() + ',' + col.toString();
                                let cellData = cellsRowCol[key] || {};
                                let isMine = minesRowCol[key] && gameOver;
                                let cellStatus = isMine? CELL_STATUS.EXPLODED : cellData.status || 0;
                                let icon =  ICONS_CELL_STATUS_MAP [cellStatus] || null;
                                let openCount = cellData.openedCount || -1;
                                return <Cell
                                    id={key}
                                    key={key}
                                    icon={icon}
                                    openCount={openCount}
                                    cellStatus = {cellStatus}
                                    onClick={this.onClickHandler}/>;
                            })}
                        </div>);
                })}
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

