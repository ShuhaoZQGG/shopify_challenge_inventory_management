import React from "react";
import axios from "axios";
import '../Styles/InventoryList.css'
import { useState, useEffect } from "react";
import WarehouseNew from "./WarehouseNew";
import { Link } from "react-router-dom";

const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([])
  useEffect(() => {
    axios.get("/api/v1/warehouses") 
    .then((res) => {
       console.log(res);
       setWarehouses(res.data.data);
       console.log(warehouses)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [warehouses.length]);

  const WarehouseList = warehouses && warehouses.map((warehouse) => {
    return (
      <ul  key={warehouse.id}>
        <li>
          {warehouse.attributes.name}
        </li>
        <li>
          {warehouse.attributes.address}
        </li>
      </ul>
    )
  })
  return (
    <div>
      <h1>Warehouses</h1>
      <Link to="/warehouse/new" element={<WarehouseNew/>}>Create a new Warehouse</Link>
      <div>
        {WarehouseList}
      </div>
    </div>
  )
};

export default WarehouseList;