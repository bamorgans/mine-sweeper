import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {CELL_TYPE, ICONS} from '../constants.js';


export default class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // adjusting the cell class when has not been selected
        let cellClass = this.props.type === CELL_TYPE.BLANK && _.isEmpty(this.props.label) ?
            'cell-default cell ': 'cell text-blue';

        return (
            <div id={this.props.id} ref={this.props.id} className={cellClass} onClick={this.props.onClick}>
                {this.props.type === CELL_TYPE.TEXT ?
                    <b>{this.props.label}</b> :
                    this.props.type === CELL_TYPE.MINE ?
                        <img src={ICONS.MINE}/> : <img src={ICONS.FLAG}/>}
            </div>
        );
    }
}


Cell.defaultProps = {
    type:CELL_TYPE.TEXT,
    label:''
};

Cell.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    onClick:PropTypes.func
};

