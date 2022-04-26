import React, { Component } from 'react'

class DateTime extends Component {
    state = {
        date: new Date()
    };
    getTime() {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);
    }
    render() {
        return (
            <>
                <h2>Time: </h2>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                {this.getTime()}
            </>
        )
    }
}

export default DateTime;