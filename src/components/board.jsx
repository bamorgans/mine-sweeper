/**
 * Created by bamorgans on 1/29/2018.
 */

//import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import {LEVEL_CONFIG} from '../constants.js';

import _ from 'lodash';
import Cell from '../components/cell.jsx';


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentWillMount() {
    }

    onClickHandler(e) {
        /* $(e).explode({
             omitLastLine: false,
             radius: 80,
             minRadius: 20,
             release: true,
             fadeTime: 300,
             recycle: true,
             recycleDelay: 500,
             fill: true,
             explodeTime: 300,
             maxAngle: 360,
             gravity: 0,
             round: false,
             groundDistance: 400,
             ignoreCompelete: false,
             land: true,
             checkOutBound: true,
             finish: true,
         });*/
        if(!_.isEmpty(this.props.gameData) && !_.isEmpty(e.target)){
            var cellRowColKey = e.target.id;
            e.ctrlKey? this.props.setFlagHandler(cellRowColKey) : this.props.openCellHandler(cellRowColKey);
        }
    }

    render() {
        let levelCfg = LEVEL_CONFIG[this.props.level];
        let cellsRowCol = this.props.gameData.cellsRowCol || {};
        return (
            <div>
                <div className='board'>
                    {Array(levelCfg.rows).fill(1).map((rowData, row) => {
                        return (
                            <div key={row} className='board'>
                                {Array(levelCfg.cols).fill(1).map((value, col) => {
                                    let key = row.toString() + ',' + col.toString();
                                    return <Cell
                                        id={key}
                                        key={key}
                                        cellData={cellsRowCol[key]}
                                        onClick={this.onClickHandler}/>;
                                })}
                            </div>);
                    })}
                </div>

                {/*<Cell id='flag' type={CELL_TYPE.FLAG} onClick={this.handler}/>
                <Cell id='mine' type={CELL_TYPE.MINE}/>
                <Cell id='one' type={CELL_TYPE.TEXT} label={'1'}/>
                <Cell id='two' type={CELL_TYPE.TEXT} label={'2'}/>
                <Cell id='mine' label={'?'} onClick={this.handler}/>
                <Cell id='empty' onClick={this.handler}/>*/
                }
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

