import React, { Component } from 'react'
import Counters from './counters';

class Navbar extends React.Component {

    state = {
        counters: [
        {id : 1, value :2},
        {id : 2, value :14},
        {id : 3, value :5},
        {id : 4, value :3}
        ]
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf( counter );
        counters[index] = {...counter };
        counters[index].value++;
        this.setState({counters} );
    }

    handleDelete = (countId) =>{
        const counters = this.state.counters.filter(c => c.id !== countId);
        this.setState({ counters })
    }

    handleReset = () =>{
         const counters = [...this.state.counters];
         counters.map( c => c.value = 0 );
         this.setState({ counters });
    }


    render() { 
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    Navbar
                </div>
                <Counters 
                    onDelete = {this.handleDelete}
                    onReset = {this.handleReset}
                    onIncrement = {this.handleIncrement}
                    counters = {this.state.counters}
                />
            </nav>
        );
    }
}
 
export default Navbar;