import React from "react";
import PropTypes from "prop-types";
//called _ from a popular js library underscore
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  //   console.log(currentPage);
  //maping each page number
  const pageCount = Math.ceil(itemsCount / pageSize);
  //using loadash to generate an array of numbers
  //+1 to make sure last page is also included
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
//proptypes for reusable components to catch bugs relateted to typechecking
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.number.isRequired,
  currentPage: PropTypes.func.isRequired,
};

export default Pagination;
