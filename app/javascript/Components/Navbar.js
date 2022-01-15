import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div >
    <div>
      <Link to="/inventories">Inventories</Link>
      <Link to="/warehouses">Warehouses</Link>
      <Link to="/groups">Groups</Link>
    </div>
    </div>
  )
}

export default Navbar;