import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count : 1,
        tags : ['tag1', 'tag2', 'tag3']
        };

    

    renderTags(){
        return this.state.tags.map(tag => <li key = { tag }>{ tag } </li>)
    };

    handleIncrement = (e) => {
        //console.log(e.id);
        this.setState({ count : this.state.count +1 } );
    }

    render() { 

        return (
        <div>
            <span className={this.badgeClasses()}>{ this.formatCount() }</span>    
            <button onClick = { () => { this.handleIncrement({id : 1 } ) } } >Increment</button>
        <div>
            {this.state.tags.length === 0 && "There are no tags found!"}
            { this.renderTags() }</div>
        </div>
        );
    }

    badgeClasses() {
        let classes = "badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        //console.log(classes);
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;