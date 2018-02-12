/**
 * Created by bamorgans on 1/29/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';

export const TIMER_EVENT = {
    PAUSE:      'pause',
    RESET:      'reset',
    START:      'start',
    STOP:       'stop'
};

export class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            start: 0,
            isStart: false,
            elapsed: 0,
            diff: 0
        };
    }

    componentWillReceiveProps(props) {
        if (TIMER_EVENT.START === props.timerEvent  && this.state.isStart !== true) {
            this.start();
        } else if(TIMER_EVENT.PAUSE === props.timerEvent) {
            this.pause();
        } else if (TIMER_EVENT.RESET === props.timerEvent) {
            this.reset();
        } else if (TIMER_EVENT.STOP === props.timerEvent) {
            this.stop();
        }
    }

    componentWillUnmount() {
        this.stop();
    }

    getElapseTime(elapsed) {
        let m = String(Math.floor(elapsed / 1000 / 60) + 100).substring(1);
        let s = String(Math.floor((elapsed % (1000 * 60)) / 1000) + 100).substring(1);
        let ms = String(elapsed % 1000 + 1000).substring(1);
        return m + ':' + s + '.' + ms;
    }

    start() {
        let self = this;
        let tick = function () {
            let elapsed = Date.now() - self.state.start + self.state.diff;
            self.setState({elapsed: elapsed});
        };

        let timer = setInterval(tick, 33);
        this.setState({
            isStart: true,
            timer: timer,
            start: new Date(),
        });
    }

    pause() {
        clearInterval(this.state.timer);
        this.setState({
            timer: undefined,
            isStart: false,
            diff: this.state.elapsed,
        });
    }

    stop() {
        clearInterval(this.state.timer);
        this.setState({
            timer: undefined,
            isStart: false
        });
    }

    reset() {
        clearInterval(this.state.timer);
        this.setState({
            timer: undefined,
            isStart: false,
            elapsed: 0,
            diff: 0
        });
    }

    render() {
        return (
            <div>
                {this.getElapseTime(this.state.elapsed)}
            </div>
        );
    }
}

Timer.defaultProps = {};

Timer.propTypes = {
    timerEvent: PropTypes.string
};


