import React, { Component } from 'react'
import Counters from './counters';

export const  Navbar = (props) => {
    return ( 
          <nav className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    Navbar
                    <span>
                        {props.totalCounts}
                    </span>
                </div>

            </nav>
     );
}
 
export default Navbar;