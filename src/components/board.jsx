import React from 'react';
import PropTypes from 'prop-types';
import {CELL_TYPE} from '../constants.js';
import Cell from '../components/cell.jsx';


export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    handler(e) {
        if (e.ctrlKey) {
            console.log('min Control clicked: ', e);
        }
        else {
            console.log('bomb control clicked: ', e);
        }
    }

    render() {
        return (
            <div>
                <div className='board'>
                    {Array(9).fill(1).map((rowData, row) => {
                        return (
                            <div key={row} className='board'>
                                {Array(9).fill(1).map((value,col) => {
                                    let key = row.toString() + '-' + col.toString();
                                    return <Cell
                                        id={key}
                                        key={key}
                                        type={CELL_TYPE.MINE}
                                        onClick={this.handler}/>;
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
    children: PropTypes.array
};

