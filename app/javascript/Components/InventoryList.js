import React from "react";
import axios from "axios";
import '../Styles/InventoryList.css'
import { useState, useEffect } from "react";
import InventoryNew from "./InventoryNew";
import { Link } from "react-router-dom";

const InventoryList = () => {
  const [inventories, setInventories] = useState([])
  useEffect(() => {
    axios.get("/api/v1/inventories") 
    .then((res) => {
       console.log(res);
       setInventories(res.data.data);
       console.log(inventories)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [inventories.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const inventoryList = inventories && inventories.map((inventory) => {
    return (
      <ul  key={inventory.id}>
        <li>
          {inventory.attributes.name}
        </li>
        <img className="inventory-image" alt={`${inventory.attributes.name}_image`} src={inventory.attributes.image_url}></img>
        <li>
          description: {inventory.attributes.description}
        </li>
        <li>
          price: {`$${inventory.attributes.price}`}
        </li>
        <li>
          quantity: {inventory.attributes.quantity}
        </li>
      </ul>
    )
  })
  return (
    <div>
      <h1>Inventory</h1>
      <Link to="/inventory/new" element={InventoryNew}>Create a  new Inventory</Link>
      <div>
        {inventoryList}
      </div>
    </div>
  )
};

export default InventoryList;