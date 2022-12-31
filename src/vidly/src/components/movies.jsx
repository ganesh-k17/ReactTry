import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import DeleteComponent from './delete';

class Movies extends Component {
    state = { 
        movies: getMovies()
     } 

    handleDelte = (movie) => {
        console.log('clicked', movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    render() { 

        const { length:count } = this.state.movies;

        if(count === 0)
            return <h3> No movies found</h3>

        return (
            <React.Fragment>
                <h2>Movies Count: {count}</h2>
                <div></div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {
                        this.state.movies.map(movie => (
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><i onClick={() => this.handleDelte(movie)} className="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                        )) 
                        }
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;