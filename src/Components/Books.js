import React from "react";
import { useEffect } from "react";
import "./Books.css";
import BooksCard from "./BooksCard";
import BooksSideNav from "./BooksSideNav";

function Books({ selectedOption, setSelectedOption }) {
  useEffect(() => {}, []);
  return (
    <div className="books">
      <div className="content">
        <div className="books__aside">
          <BooksSideNav setSelectedOption={setSelectedOption} />
        </div>
        <div className="books__body">
          <BooksCard selectedOption={selectedOption} />
        </div>
      </div>
    </div>
  );
}

export default Books;
