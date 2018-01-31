import React from 'react';

export default class Cell extends React.Component {
    componentWillMount() {
    }

    render() {
        return (
            <div>
                in here
                <a> <img src='./static/img/bomb_32.png'/> </a>
            </div>
        );
    }
}

Cell.propTypes = {};

