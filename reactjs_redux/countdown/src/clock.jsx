import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    leadingZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const second = Math.floor((time/1000) % 60);
        const minute = Math.floor((time/1000/60) % 60);
        const hour = Math.floor((time/(1000*60*60)) % 24);
        const day = Math.floor(time/(1000*60*60*24));

        this.setState({day, hour, minute, second})
    }

    render() {
        return (
            <div>
                <div className="clock-day">
                    { this.leadingZero(this.state.day) } days
                </div>
                <div className="clock-hour">
                    { this.leadingZero(this.state.hour) } hours
                </div>
                <div className="clock-minute">
                    { this.leadingZero(this.state.minute) } minutes
                </div>
                <div className="clock-second">
                    { this.leadingZero(this.state.second) } seconds
                </div>
            </div>
        )
    }
}

export default Clock;