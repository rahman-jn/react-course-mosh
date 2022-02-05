import React, { Component } from 'react'
import Counter from './counter';

class Counters extends React.Component {

    render() { 
        const {onReset, onDelete, onIncrement, counters } = this.props;
        return <div>
                    <button className="btn-primary btn-sm m-2" onClick={onReset}>
                        Reset
                    </button>
                   {counters.map(counter =>
                   <Counter 
                   key={counter.id}
                   counter = {counter} 
                   onDelete = {onDelete}
                   onIncrement = { () => onIncrement(counter) }
                    />)} 
                </div>;
    }
}
 
export default Counters;