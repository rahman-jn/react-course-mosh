import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends React.Component {
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

handleDecrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters} )
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
      <React.Fragment>
        <Navbar 
          totalCounts = { this.state.counters.map(c => c.value >0).length}
         />
        <Counters 
                    onDelete = {this.handleDelete}
                    onReset = {this.handleReset}
                    onIncrement = {this.handleIncrement}
                    onDecrement = { this.handleDecrement }
                    counters = {this.state.counters}
                />
      </React.Fragment>
    );
  }
}
 
export default App;
