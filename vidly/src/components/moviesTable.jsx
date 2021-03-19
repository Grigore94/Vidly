import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", lablel: "Title" },
    { path: "genre.name", lablel: "Genre" },
    { path: "numberInStock", lablel: "Stock" },
    { path: "dailyRentalrent", lablel: "Rent" },
    {
      key: "like",
      content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} />
      </table>
    );
  }
}

export default MoviesTable;
