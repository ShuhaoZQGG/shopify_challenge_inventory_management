import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import InventoryList from "./InventoryList.js";
import GroupList  from "./GroupList.js";
import WarehouseList from "./WarehouseList.js";
import InventoryNew from "./InventoryNew.js";

const RoutesManagement = () => {
  return (
    <div >
      <Routes>
        <Route path='/inventories' element={ <InventoryList/> }>Inventories</Route>
        <Route path='/warehouses' element={ <WarehouseList/> }>Warehouses</Route>
        <Route path='/groups' element={ <GroupList/> }>Groups</Route>
        <Route path='/inventory/new' element={ <InventoryNew/> }></Route>
      </Routes>
    </div>
  )
}

export default RoutesManagement;