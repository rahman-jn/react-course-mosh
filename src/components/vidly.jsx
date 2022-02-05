import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Vidly extends React.Component {

    state = {
        movies : getMovies(),
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({ movies } );
    };

    showTable(){
        if(this.state.movies.length ===0 )
            return <p>There are no movies!</p>;
        return (
        <div>
            <div>Showing {this.state.movies.length} in stock.</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Gener</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        this.state.movies.map(movie => 
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td> 
                                <td><button className="btn btn-danger"
                                 onClick={ () => this.handleDelete(movie)} >Delete</button></td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>    
            );
            
    }

    render() { 
        return <div>{this.showTable()}</div>;
    }
}
 
export default Vidly;