import React from 'react';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    getStyles() {
        return {
            dashboard: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: 100,
                padding: 10,
                marginBottom:30,
                background: '#484848'
            },
            gameInfo: {},
            elapsedTime: {}
        };
    }

    render() {
        let styles = this.getStyles();
        return (
            <div className='dashboard' style={styles.dashboard}>
                <div style={styles.gameInfo}></div>
                <div style={styles.elapsedTime}></div>
            </div>
        );
    }
}

Dashboard.defaultProps = {

};

Dashboard.propTypes = {
};
