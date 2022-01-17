import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import RoutesManagement from "./RoutesManagement";
const App = () => {

  return (
    <div>
      <Navbar/>
      <RoutesManagement />
    </div>
  )
}

export default App;