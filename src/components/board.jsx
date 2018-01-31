import React from 'react';
import PropTypes from 'prop-types';
import actions  from '../actions.js';
import store from '../store.js';

export default class Board extends React.Component {
    componentWillMount() {
        store.dispatch(actions.changeLevel(3));
    }

    render() {
        let data = store.getState();
        const {children} = this.props;
        let childNames = React.Children.map(children, child => child.props.children);

        return (
            <div>
                <h1> level = {data.level}</h1>
                <h2> {childNames.join(' ')}</h2>
            </div>
        );
    }
}

Board.propTypes = {
    children: PropTypes.array
};

