import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const InventoryUpdate = (props) => {
  const location = useLocation();
  const originalInventory = location.state.inventory
  const [updated, setUpdated] = useState(false);
  const [inventory, setInventory]= useState(
    {
      "name": originalInventory.attributes.name,
      "price": originalInventory.attributes.price,
      "image_url": originalInventory.attributes.image_url,
      "warehouse_id": originalInventory.attributes.warehouse_id,
      "group_id": originalInventory.attributes.group_id
    }
  )
  
  const [warehouses, setWarehouses] = useState([]);

  const [groups, setGroups] = useState([]);
  
  useEffect(() => {
    console.log(location);
    console.log(props);
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

  const warehouseIdList = warehouses && warehouses.map((warehouse) => {
    let output = '';
    if (warehouse.id == inventory.warehouse_id) {
      output = 
      <option key={warehouse.id} value={warehouse.id} selected>
      {warehouse.id}: {warehouse.attributes.name} 
      </option>
    }

    else {
      output = 
      <option key={warehouse.id} value={warehouse.id}>
      {warehouse.id}: {warehouse.attributes.name}
    </option>
    }
    return (
      output
    )
  })

  const groupIdList = groups.map((group) => {
    let output = '';
    if (group.id == inventory.group_id) {
      output =       
      <option key={group.id} value={group.id} selected>
      {group.id}: {group.attributes.name}
    </option>
    } else {
      output = 
      <option key={group.id} value={group.id}>
      {group.id}: {group.attributes.name}
    </option>
    }
    return (
      output
    )
  })

  const statusMessage = updated 
                        ? <h1>Inventory has been updated</h1> 
                        : <h1>Please update the inventory information</h1>;

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
     axios.put(`/api/v1/inventories/${originalInventory.id}`, inventory)
          .then((res) => {
            console.log(res)
            setUpdated(true);
          })
          .catch((err) => {
            console.log(err);
          })
  }
  return (
    <div>
      {statusMessage}
      <form action="/api/v1/inventories" method="post"  onSubmit={handleSubmit}>
        <label htmlFor="name" >Inventory Name</label>
        <input id="inventory-name" type="text" name="name" value={inventory.name} onChange={ handleChange }></input>
        <label htmlFor="price" >Inventory Price</label>
        <input id="inventory-price" type="number" step="0.01" name="price" value={inventory.price} onChange={ handleChange }></input>
        <label htmlFor="image_url" >Inventory Image_URL</label>
        <input id="inventory-image-url" name="image_url" onChange={ handleChange } value={inventory.image_url}></input>
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
        <button>Update</button>
      </form>
    </div>
  )
}

export default InventoryUpdate;