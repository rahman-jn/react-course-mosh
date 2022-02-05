import React, { Component } from 'react'
import Counters from './counters';

export const  Navbar = ({totalCounts}) => {
    return ( 
          <nav className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    Navbar
                    <span>
                        {totalCounts}
                    </span>
                </div>

            </nav>
     );
}
 
export default Navbar;