import React, { useState, useEffect } from "react";
import "./card.css";

function Card(props) {
  // const [image, setImage] = useState([]);
  // useEffect(() => {
  //   console.log("Effect ran");
  //   fetch(
  //     `https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setImage(data));
  // }, []);
  // console.log(image);
  return (
    <div className="parentCard">
      <div className="card">
        <img src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexee3e8a8.jpeg" />
        <div className="card--stats">
          <span>{props.item.Stars}⭐</span>
        </div>
        <span>{props.item.Brand}</span>
        <span>{props.item.Variety}</span>
        <span>{props.item.Country}</span>
        <p>{props.item.Style}</p>
        <p>{props.item.Top}</p>
      </div>
    </div>
  );
}

export default Card;
