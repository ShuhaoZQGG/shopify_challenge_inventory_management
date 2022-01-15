import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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

  const inventoryList = inventories && inventories.map((inventory) => {
    return (
      <ul  key={inventory.id}>
        <li>
          {inventory.attributes.name}
        </li>
        <img class="inventory-image" src={inventory.attributes.image_url}></img>
        <li>
          {inventory.attributes.price}
        </li>
      </ul>
    )
  })
  return (
    <div>
      <h1>Inventory</h1>
      <div>
        {inventoryList}
      </div>
    </div>
  )
};

export default InventoryList;