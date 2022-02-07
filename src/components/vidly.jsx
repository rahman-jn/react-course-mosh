import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import paginate from '../utils/paginate';
import {ListGroup} from './listgroup';
import {getGenres} from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Vidly extends React.Component {

    state = {
        movies : [],
        perPage :3,
        currentPage :1,
        genres : [],
        sortColumn : {path : 'title', order : 'asc'}
    };

    componentDidMount(){
        const genres = [{_id : "", name : "All Genres"},...getGenres()]
        this.setState({ movies : getMovies(), genres })
    }


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

    handleGenre = genre => {
        this.setState({ currentGenre : genre, currentPage : 1 });
    };

    handleSort = path =>{
        this.setState({ sortColumn : {path, order: 'asc' }});
    }

    showTable(){
        const { sortColumn } = this.state;
        if(this.state.movies.length ===0 )
            return <p>There are no movies!</p>;

            const filteredMovies = this.state.currentGenre && this.state.currentGenre._id ?
            this.state.movies.filter(movie => (movie.genre._id === this.state.currentGenre._id)) : this.state.movies;
            
            const sorted = _.orderBy(filteredMovies, sortColumn.path, sortColumn.order);

            const movies = paginate(sorted, this.state.currentPage, this.state.perPage);
            
        return (
        <div className="row">
            <div className="col-2">
                <ListGroup
                    items = { this.state.genres }
                    onSelectGenre = { this.handleGenre }
                    currentGenre = { this.state.currentGenre }
                />
            </div>
            <div className="col">
                <MoviesTable
                    movies = {movies}
                    onLike = {this.handleLike}
                    onDelete = {this.handleDelete}
                    onSort = {this.handleSort}
                />

                <Pagination
                moviesCount = { filteredMovies.length }
                perPage = { this.state.perPage }
                onPageChange = { this.handlePagination }
                currentPage = { this.state.currentPage }
                />
            </div>
        </div>    
            );
            
    }

    render() { 
        return <div>{this.showTable()}</div>;
    }
}
 
export default Vidly;