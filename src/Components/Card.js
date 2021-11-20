import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ card }) {
  const { title, image, price, url, isbn13 } = card;
  return (
    <div className="card">
      <div className="content">
        <Link to={`/books/${isbn13}`}>
          <div className="card__image">
            <img src={image} alt="book" />
          </div>
        </Link>
        <div className="card__info">
          <div className="card__title">
            <a href={url}>
              <p>{title}</p>
            </a>
          </div>
          <div className="card__detail">
            <div className="card__rating">
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
            </div>
            <div className="card__price">
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
