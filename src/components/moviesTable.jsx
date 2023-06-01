import React, { Component } from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete } = props;
  return (
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
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td className="col-4">{movie.title}</td>
            <td className="col-2">{movie.genre.name}</td>
            <td className="col-2">{movie.numberInStock}</td>
            <td className="col-2">{movie.dailyRentalRate}</td>
            <td className="col-1">
              <Like liked={movie.liked} onLike={() => onLike(movie)} />
            </td>
            <td className="col-2">
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
