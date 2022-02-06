import React, { Component } from 'react';

class Counter extends React.Component {

    renderTags(){
        return this.state.tags.map(tag => <li key = { tag }>{ tag } </li>)
    };

    render() { 

        return (
        <div className="col-md-6">
            <span className={this.badgeClasses()}>{ this.formatCount() }</span>    
            <button className="btn btn-secondary btn-sm m-2 col-md-2"
                onClick = { () => { this.props.onIncrement(this.props.counter) } } >+
             </button>
             <button className="btn btn-secondary btn-sm m-2 col-md-2"
                onClick = { () => { this.props.onDecrement(this.props.counter) } }
                disabled = {this.props.counter.value === 0 ? "disabled" : ''}
                >-
             </button>
            <button onClick = {() => this.props.onDelete(this.props.counter.id) }
             className="btn-danger btn-sm m-2 col-md-2">Delete</button>
        {/* <div>
            {this.state.tags.length === 0 && "There are no tags found!"}
            { this.renderTags() }</div> */}
        </div>
        );
    }

    badgeClasses() {
        let classes = "col-md-2 badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        //console.log(classes);
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

}
 
export default Counter;