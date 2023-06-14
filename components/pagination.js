import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex justify-center mt-4 pb-4">
      <ul className="flex">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`border border-gray-300 rounded-full h-8 w-8 flex items-center justify-center mx-1 ${
              currentPage === pageNumber ? "bg-gray-300" : ""
            }`}
          >
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`text-sm font-medium leading-5 focus:outline-none ${
                currentPage === pageNumber ? "text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
