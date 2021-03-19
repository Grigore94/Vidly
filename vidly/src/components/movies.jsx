import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
  };
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    //modern js if key and value are the same we remove repetition movies: movie => movies
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  //setting current page to 1 when navigating through other genres
  handleGenreSelect = (genre) => {
    this.seState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    // obj destructuring setin this.satte.movie as count variable
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;
    if (count === 0) return <p>No movies scheduled for today</p>;
    //ternary operator if selectedgenre is truthy we get all movies and filter them
    const filltered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre_id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filltered, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            item={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>We are showing {filltered.length} movies today</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />

          <Pagination
            itemsCount={filltered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
