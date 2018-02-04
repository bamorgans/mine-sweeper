import React from 'react';
import PropTypes from 'prop-types';
import {CELL_STATUS} from '../api/minesweeper.js';
import {ICONS} from '../constants.js';

const colorMap = {
    '-1':'text-brown',
    '1': 'bkgd-blue',
    '2': 'bkgd-green',
    '3': 'bkgd-red',
    '4': 'bkgd-violet',
    '5': 'bkgd-magenta',
    '6': 'bkgd-cyan',
    '7': 'bkgd-yellow',
    '8': 'bkgd-black'
};

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cellData = this.props.cellData || {};
        let openCount = cellData.openedCount || -1;
        let cellStatus = cellData.status || 0;

        // adjusting the cell class when has not been selected
        let cellClass = cellStatus === CELL_STATUS.UNKNOWN ?
            'cell-default cell': 'cell ' + colorMap[openCount.toString()];

        // removing label for clear cells
        openCount = openCount !== -1 ? openCount : '';
        return (
            <div id={this.props.id} ref={this.props.id} className={cellClass} onClick={this.props.onClick}>
                {CELL_STATUS.OPENED === cellStatus ?
                    <b>{openCount}</b> :
                    CELL_STATUS.EXPLODED === cellStatus ?
                        <img src={ICONS.MINE}/> : CELL_STATUS.FLAGGED == cellStatus ? <img src={ICONS.FLAG}/> : ''}
            </div>
        );
    }
}


Cell.defaultProps = {};

Cell.propTypes = {
    id: PropTypes.string.isRequired,
    cellData: PropTypes.object,
    onClick: PropTypes.func
};

