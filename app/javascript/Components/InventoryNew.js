import React from "react";
import { useState } from "react";
import axios from "axios";

const InventoryNew = () => {
  const [inventory, setInventory]= useState(
    {
      "name": "",
      "price": 0,
      "image_url": "",
      "warehouse": 0
    }
  )

  const handleChange = (e) => {
    const newInventory = {...inventory};
    newInventory[e.target.name] = e.target.value;
    setInventory(newInventory);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     axios.post('/api/v1/inventories')
          .then((res) => {
            console.log(res)
            setInventory(
              {
                "name": "",
                "price": 0,
                "image_url": "",
                "warehouse": 0
              }
            )
          })
          .catch((err) => {
            console.log(err);
          })
  }
  return (
    <div>
      <form action="/api/v1/inventories" method="post"  onSubmit={handleSubmit}>
        <label htmlFor="name">Inventory Name</label>
        <input id="inventory-name" type="text" name="name" onChange={ handleChange }></input>
        <label htmlFor="price">Inventory Price</label>
        <input id="inventory-price" type="number" name="price" onChange={ handleChange }></input>
        <label htmlFor="image-url">Inventory Image_URL</label>
        <input id="inventory-image-url" name="image-url" onChange={ handleChange }></input>
        <label for="warehouse">Choose the Warehouse</label>
        <select name="warehouse"
        ></select>
        <button>Create a new inventory</button>
      </form>
    </div>
  )
}

export default InventoryNew;