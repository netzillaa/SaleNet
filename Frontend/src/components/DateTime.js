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
                <h2 style={{marginBottom:'0px'}}>Time:</h2> &nbsp;
                <h3 style={{marginBottom:'0px', marginRight:'5px', fontWeight:'bolder'}}>
                    {this.state.date.toLocaleTimeString()}
                </h3>
                {this.getTime()}
            </>
        )
    }
}

export default DateTime;