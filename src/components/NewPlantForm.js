import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "name": formData.name,
        "image": formData.image,
        "price": formData.price
      })
    })
      .then((r) => r.json())
      .then((resp) => setPlants(plants));
    // How do I get newly added plants show right away? Component needs to be rerendered with a new fetch
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
