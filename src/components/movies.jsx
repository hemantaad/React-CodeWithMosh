import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreServices";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movieObj) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movieObj);
    const movie = movies[index];
    movie.liked = !movie.liked;
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allMovies,
      genres,
      pageSize,
      currentPage,
      selectedGenre,
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre.name === selectedGenre.name)
        : allMovies;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    if (count === 0) return <p>There are no movies in database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            onItemSelect={this.handleGenreSelect}
            items={genres}
            currentItem={selectedGenre}
          />
        </div>
        <div className="col-9">
          <p>Showing {filteredMovies.length} movies in database</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filteredMovies.length}
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
