import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import paginate from '../utils/paginate';

class Vidly extends React.Component {

    state = {
        movies : getMovies(),
        perPage :3,
        currentPage :1
    };



    handleDelete = (movie) => {
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({ movies } );
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movie.liked;
        this.setState({movies});
    };

    handlePagination = page => {
        this.setState({currentPage : page});

        
    };

    showTable(){
        if(this.state.movies.length ===0 )
            return <p>There are no movies!</p>;
            const movies = paginate(this.state.movies, this.state.currentPage, this.state.perPage);
        return (
        <div>
            <div>Showing {movies.length} in stock.</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Gener</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    { 
                        movies.map(movie => 
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td> 
                                <td><Like
                                        liked = { movie.liked }
                                        onClick= { () => { this.handleLike(movie) } }
                                     />
                                 </td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={ () => this.handleDelete(movie)} >Delete
                                    </button>
                                 </td>
                            </tr>
                    )}
                </tbody>
            </table>
            <Pagination
             moviesCount = { this.state.movies.length }
             perPage = { this.state.perPage }
             onPageChange = { this.handlePagination }
             currentPage = { this.state.currentPage }
             />
        </div>    
            );
            
    }

    render() { 
        return <div>{this.showTable()}</div>;
    }
}
 
export default Vidly;