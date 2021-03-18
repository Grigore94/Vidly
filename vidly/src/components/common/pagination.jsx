import React from "react";
//called _ from a popular js library called underscore
import _ from "lodash";

const Pagination = (props) => {
  //maping eatch page number
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
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
            key={pages}
            className={page === currentPage ? "page-item-active" : "page-item"}
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

export default Pagination;
