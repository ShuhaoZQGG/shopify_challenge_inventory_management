import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const InventoryNew = () => {
  const [inventory, setInventory]= useState(
    {
      "name": "",
      "price": 0,
      "image_url": "",
      "warehouse_id": 0,
      "group_id": 0
    }
  )
  
  const [warehouses, setWarehouses] = useState([]);

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/warehouses") 
    .then((res) => {
       setWarehouses(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    })

    axios.get("/api/v1/groups") 
    .then((res) => {
      setGroups(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    })

  }, [warehouses.length, groups.length]);

  const warehouseIdList = warehouses.map((warehouse) => {
    return (
      <option key={warehouse.id} value={warehouse.id}>
        {warehouse.id}: {warehouse.attributes.name}
      </option>
    )
  })

  const groupIdList = groups.map((group) => {
    return (
      <option key={group.id} value={group.id}>
        {group.id}: {group.attributes.name}
      </option>
    )
  })

  const handleChange = (e) => {
    const newInventory = {...inventory};
    newInventory[e.target.name] = e.target.value;
    setInventory(newInventory);
  }

  const handleChangeId = (e) => {
    const newInventory = {...inventory};
    newInventory[e.target.name] = e.target.value;
    setInventory(newInventory);
  }
  
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(inventory);
     axios.post('/api/v1/inventories', inventory)
          .then((res) => {
            console.log(res)
            setInventory(
              {
                "name": "",
                "price": 0,
                "image_url": "",
                "warehouse_id": 0,
                "group_id": 0
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
        <input id="inventory-price" type="number" step="0.01" name="price" onChange={ handleChange }></input>
        <label htmlFor="image_url">Inventory Image_URL</label>
        <input id="inventory-image-url" name="image_url" onChange={ handleChange }></input>
        <label htmlFor="warehouse_id">Choose the Warehouse</label>
        <select onChange={ handleChangeId } name="warehouse_id"
        > 
        <option></option>
        {warehouseIdList} 
        </select>
        <label htmlFor="group_id">Choose the Group</label>
        <select onChange={ handleChangeId } name="group_id"
        > 
        <option></option>
        {groupIdList} 
        </select>
        <button>Create a new inventory</button>
      </form>
    </div>
  )
}

export default InventoryNew;