import axios from "../axios";
import React, { useContext, useEffect, useState } from "react";
import "./BooksCard.css";
import Card from "./Card";
import { theOption } from "../App";
function BooksCard() {
  const option = useContext(theOption);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(option);
      const resultsData = request.data;
      const results = resultsData.books;
      setCards(results);
      console.log(resultsData);
    }
    fetchData();
  }, [option]);
  return (
    <div className="books__card">
      <div className="content">
        <div className="books__card__heading">
          <h2 className="index par">
            <span>New Releases Books</span>
          </h2>
        </div>
        <div className="theCards">
          {cards.map((card) => {
            return <Card card={card} key={card.isbn13} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
