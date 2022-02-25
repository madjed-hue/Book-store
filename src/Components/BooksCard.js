import axios from "../axios";
import React, { useContext, useEffect, useState } from "react";
import "./BooksCard.css";
import Card from "./Card";
import { theOption } from "../App";
import Loader from "./Loader/Loader";
function BooksCard() {
  const option = useContext(theOption);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const request = await axios.get(option);
      const resultsData = request.data;
      const results = resultsData.books;
      setCards(results);
    }
    fetchData();
    setLoading(false);
  }, [option]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

export default BooksCard;
