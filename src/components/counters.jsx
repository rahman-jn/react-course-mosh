import React, { Component } from 'react'
import Counter from './counter';

class Counters extends React.Component {
    state = {
        counters: [
        {id : 1, value :2},
        {id : 2, value :14},
        {id : 3, value :5},
        {id : 4, value :3}
        ]
    };

    render() { 
        return <div>
                   {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} />)} 
                </div>;
    }
}
 
export default Counters;