import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {CELL_TYPE} from '../constants.js';

const ICON_MINE = './static/img/mine_32.png';
const ICON_FLAG = './static/img/flag_red_32.png';

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
                        <img src={ICON_MINE}/> : <img src={ICON_FLAG}/>}
            </div>
        );
    }
}
/*
<div>
id={this.props.id}
ref={this.props.ref}
style={styles.root}
className={this.props.className}
onClick={this.props.onClick}
onMouseEnter={this.props.onMouseEnter}
onMouseLeave={this.props.onMouseLeave}
</div>
*/

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

