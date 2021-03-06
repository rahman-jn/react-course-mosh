import React, { Component } from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

class Pagination  extends React.Component {
    render() { 
        const pageCount = Math.ceil(this.props.moviesCount/this.props.perPage);
        if(pageCount === 1 ) return null;
        const pages = _.range(1, pageCount +1 );

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">  
                        { pages.map( page => ( 
                            <li key={page} className={page === this.props.currentPage ? "page-item active" : "page-item"}>
                                <a className="page-link" onClick={ () => this.props.onPageChange(page)}>{page}</a>
                            </li> 
                        ))}                      

                    </ul>
                </nav>
            </div>
            );
    }
}
 
Pagination.propTypes = {
    moviesCount : propTypes.number.isRequired,
    perPage : propTypes.number.isRequired,
    currentPage : propTypes.number.isRequired,
    onPageChange : propTypes.func
}

export  default Pagination ;