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
    //like and button component here as they are plain js obj added as proprties in column array replaced value seted to a fn with movie parrameter and reference this.props
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
    const { movies, sortColumn, onSort } = this.props;
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
