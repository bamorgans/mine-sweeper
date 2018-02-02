import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../actions.js';
import store from '../store.js';


const mapStateToProps = state => {
    return {level: state.level};
};

class connectedHeader extends React.Component {

    constructor({level}) {
        super({level});
        this.state = {
            value: 'beginner',
        };
    }

    getStyles() {
        return {
            header: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: 42,
                padding: 10,
                background: '#212121'
            },
            title: {
                color: '#fff',
                fontSize: '1.5em',
                flexGrow: 2
            },

            levelContainer: {
                flexGrow: 1,
            },

            buttonContainer: {
                flexGrow: 0
            }
        };
    }

    handleChangeLevel(e) {
        if (e.target && e.target.value) {
            store.dispatch(actions.setLevel(e.target.value));
        }

    }

    render() {
        let styles = this.getStyles();
        return (
            <div style={styles.header}>
                <div style={styles.title}>MineSweeper</div>
                <div style={styles.levelContainer}>
                    <select className='combobox' value={this.props.level} onChange={this.handleChangeLevel.bind(this)}>
                        <option value='beginner'>Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='expert'>Expert</option>
                    </select>
                </div>
                <div style={styles.buttonContainer}>
                    <button className='button'>New Game</button>
                </div>
            </div>
        );
    }
}


const Header = connect(mapStateToProps)(connectedHeader);

connectedHeader.propTypes = {
    level: PropTypes.string
};
export default Header;
