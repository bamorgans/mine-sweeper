import React from 'react';
import PropTypes from 'prop-types';
import actions  from '../actions.js';
import store from '../store.js';
import Cell from '../components/cell.jsx';
export default class Board extends React.Component {
    componentWillMount() {
        store.dispatch(actions.setLevel(3));
    }

    render() {
        let data = store.getState();
        const {children} = this.props;
        let childNames = React.Children.map(children, child => child.props.children);

        return (
            <div>
                <Cell/>
                <h1> level = {data.level}</h1>
                <h2> {childNames.join(' ')}</h2>
            </div>
        );
    }
}

Board.propTypes = {
    children: PropTypes.array
};

