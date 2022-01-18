import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const WarehouseNew = () => {
  const [warehouse, setWarehouse]= useState(
    {
      "name": "",
      "address": ""
    }
  )

  const handleChange = (e) => {
    const newWarehouse = {...warehouse};
    newWarehouse[e.target.name] = e.target.value;
    setWarehouse(newWarehouse);
  }

  
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(warehouse);
     axios.post('/api/v1/warehouses', warehouse)
          .then((res) => {
            console.log(res)
            setWarehouse(
              {
                "name": "",
                "address": ""
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
        <label htmlFor="name">Warehouse Name</label>
        <input id="warehosue-name" type="text" name="name" onChange={ handleChange }></input>
        <label htmlFor="address">Warehouse Address</label>
        <input id="warehouse-address" type="text" name="address" onChange={ handleChange }></input>
        <button>Create a new Warehouse</button>
      </form>
    </div>
  )
}

export default WarehouseNew;