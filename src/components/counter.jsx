import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        value : this.props.counter.value,
        tags : ['tag1', 'tag2', 'tag3']
        };

    

    renderTags(){
        return this.state.tags.map(tag => <li key = { tag }>{ tag } </li>)
    };

    handleIncrement = (e) => {
        //console.log(e.id);
        this.setState({ value : this.state.value +1 } );
    }

    render() { 

        return (
        <div>
            <span className={this.badgeClasses()}>{ this.formatCount() }</span>    
            <button className="btn btn-secondary btn-sm m-2" onClick = { () => { this.handleIncrement({id : 1 } ) } } >Increment</button>
            <button onClick = {() => this.props.onDelete(this.props.counter.id) } className="btn-danger btn-sm m-2">Delete</button>
        {/* <div>
            {this.state.tags.length === 0 && "There are no tags found!"}
            { this.renderTags() }</div> */}
        </div>
        );
    }

    badgeClasses() {
        let classes = "badge badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        //console.log(classes);
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }

}
 
export default Counter;