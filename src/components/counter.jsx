import React, { Component } from 'react';


class Counter extends React.Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) =>  {
      //  console.log("Increment Clicked",this); 
      console.log(product);
        this.setState({count : this.state.count+1 })
    }
    doHandleIncrement = () => {
        this.handleIncrement({id:1});
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

}

export default Counter;