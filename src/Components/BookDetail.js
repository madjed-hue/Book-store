import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "./BookDetail.css";

function BookDetail() {
  const [stars, setStars] = useState(0);
  const [theId, setTheId] = useState([]);
  const baseUrl = "https://api.itbook.store/1.0/books/";
  const { id } = useParams();
  const starRating = useRef(0);
  const pdfRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${id}`);
      const response = request.data;
      const rating = request.data.rating;
      const pdf = request.data.pdf;
      if (!pdf) {
        //
      } else {
        for (const [key, value] of Object.entries(pdf)) {
          const myPdf = document.createElement("a");
          const myPdfText = document.createTextNode(`${key}`);
          myPdf.appendChild(myPdfText);
          myPdf.setAttribute("href", `${value}`);
          pdfRef.current.appendChild(myPdf);
        }
      }
      console.log(pdfRef.current);
      const ratingNum = Number(rating);
      if (ratingNum === 0) {
        setStars("0");
      } else {
        for (let i = 0; i < ratingNum; i++) {
          const element = ratingNum;
          setStars(element);
        }
      }
      if (!stars) {
        return null;
      }
      const starsArray = Array.from(Array(stars).keys());
      starsArray.forEach((element) => {
        const theSpanStar = document.createElement("span");
        const starContainer = document.createTextNode("⭐");
        theSpanStar.appendChild(starContainer);
        starRating.current.appendChild(theSpanStar);
      });
      console.log(response);
      setTheId(response);
    }
    fetchData();
  }, [id, stars]);
  return (
    <div className="book__details">
      <div className="container">
        <div className="content">
          <div className="img__container">
            <img src={theId.image} alt={theId.image} />
            <p>
              <a href={theId.url}>Visit Website</a>
            </p>
          </div>
          <div className="thebooks__info">
            <div className="title">
              <h1>{theId.title}</h1>
              <p ref={starRating}> Rating : </p>
            </div>
            <div className="description">
              <p> {theId.desc} </p>
            </div>
            <div className="subInfo">
              <p>Author : {theId.authors} </p>
              <p>Language : {theId.language} </p>
              <p>Pages : {theId.pages} page</p>
              <p>Price : {theId.price}</p>
              <p>Publisher : {theId.publisher} </p>
              <p>Year : {theId.year} </p>
            </div>
            <div className="chapters">
              <p ref={pdfRef}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
