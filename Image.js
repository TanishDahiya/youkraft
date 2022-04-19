import React, { useEffect, useState } from 'react'
import Card from './Card';

function Image() {
  const [image, setImage]=useState([]);
  useEffect( ()=> {
    console.log("Effect ran");
    fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json`
    )
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);
  console.log(image)

  const cardImage =
  image.map((i) => {
        return <Card key={i.id} image={i}/>;
      });
  return (
    <div>
        {cardImage}
    </div>
  )
}

export default Image