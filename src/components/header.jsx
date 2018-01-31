import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Board extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <AppBar showMenuIconButton={false} title="Minesweeper"/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

Board.propTypes = {
    children: PropTypes.array
};

