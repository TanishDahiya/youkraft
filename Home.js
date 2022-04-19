import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import "./home.css";


function Home() {
  const [brandData, setBrandData] = useState([]);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const callbackSearch = (child) => {
    console.log("called");
    setSearch(child);
    console.log(child);
  };
  console.log(search);

  useEffect(() => {
    console.log("Effect ran");
    fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`
    )
      .then((res) => res.json())
      .then((data) => setBrandData(data));
  }, []);

  useEffect(() => {
    setData(
      brandData.filter((e) => e.Country.toLowerCase() === search.toLowerCase())
    );
  }, [search]);

  const carddata =
    data.length > 0
      ? data.map((i) => {
          return <Card key={i.id} item={i} />;
        })
      : brandData.map((i) => {
          return <Card key={i.id} item={i} />;
        });
  return (
    <div>
      <Navbar callbackSearch={callbackSearch} />
      <div className="carddiv">
      {carddata}
      </div>
     
    </div>
  );
}

export default Home;
