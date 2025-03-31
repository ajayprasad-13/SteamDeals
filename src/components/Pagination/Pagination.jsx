import React from "react";
import "./Pagination.css";

export default function Pagination({ totalPosts, postsPerPage, paginate, currentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((pageNumber, index) => (
        <button key={index} onClick={() => paginate(pageNumber)} className={pageNumber === currentPage ? "active" : ""}  >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
