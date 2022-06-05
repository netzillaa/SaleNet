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
                <h3 style={{marginTop:'0px'}}>Time:</h3> &nbsp;
                <h3 style={{marginTop:'0px', marginRight:'5px', fontWeight:'bold'}}>
                    {this.state.date.toLocaleTimeString()}
                </h3>
                {this.getTime()}
            </>
        )
    }
}

export default DateTime;