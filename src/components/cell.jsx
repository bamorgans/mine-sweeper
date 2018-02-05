import React from 'react';
import PropTypes from 'prop-types';
import  {CELL_COLORMAP} from '../constants.js';
import {CELL_STATUS} from '../api/minesweeper.js';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cellStatus = this.props.cellStatus || 0;
        let openCount = this.props.openCount;
        // adjusting the cell class when has not been selected
        let cellClass = cellStatus === CELL_STATUS.UNKNOWN ?
            'cell-default cell': this.props.icon !== null ? 'cell' : 'cell ' + CELL_COLORMAP[openCount.toString()];

        openCount = openCount !== -1 ? openCount : '';
        return (
            <div id={this.props.id} ref={this.props.id} className={cellClass} onClick={this.props.onClick}>
                {CELL_STATUS.OPENED === cellStatus ?
                    <b>{openCount}</b> :
                    null !== this.props.icon ? <img src={this.props.icon}/>: ''}
            </div>
        );
    }
}

Cell.defaultProps = {};

Cell.propTypes = {
    id: PropTypes.string.isRequired,
    icon:PropTypes.string,
    openCount:PropTypes.number,
    cellStatus: PropTypes.number,
    onClick: PropTypes.func
};

