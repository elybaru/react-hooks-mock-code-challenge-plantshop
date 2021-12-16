import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleInStock(event) {
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={plant ? plant.image : "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
          <button onClick={handleInStock}>Out of Stock</button>
        )}
    </li>
  );
}

export default PlantCard;
