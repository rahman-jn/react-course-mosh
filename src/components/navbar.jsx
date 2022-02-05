import React, { Component } from 'react'
import Counters from './counters';

class Navbar extends React.Component {




    render() { 
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    Navbar
                    <span>
                        {this.props.totalCounts}
                    </span>
                </div>

            </nav>
        );
    }
}
 
export default Navbar;