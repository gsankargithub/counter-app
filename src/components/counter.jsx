import React, { Component } from 'react';


class Counter extends React.Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <span className = "badge badge-primary m-2">{this.formatCount()}</span>
                <button className = "btn btn-secondary btn-sm">
                    Increment
                </button>
            </div>
        );
    }
    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;