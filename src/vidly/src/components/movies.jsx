import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './like';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
// import DeleteComponent from './delete';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 6,
        currentPage: 1  // initially it is first page
     } 

    handleDelte = (movie) => {
        console.log('clicked', movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    handleLike = (movie) => {
        
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movie.liked = !movie.liked; // movie.liked ? false: true;
        this.setState({movies});
    }

    handlePageChange = page => {
        console.log('page clicked:',page);
        this.setState({currentPage:page});
    }

    render() { 

        const { length:count } = this.state.movies;  // total count from movies list from state to calcualte pagination

        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);  // filtered movies

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {
                        movies.map(movie => (
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked = {movie.liked} onLiked ={ () => this.handleLike(movie) }/></td>
                                <td><i onClick={() => this.handleDelte(movie)} className="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                        )) 
                        }
                        
                    </tbody>
                </table>
                <div>
                    <Pagination currentPage = {this.state.currentPage} itemsCount = {count}  pageSize = {this.state.pageSize} onPageChange = {this.handlePageChange}/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movies;