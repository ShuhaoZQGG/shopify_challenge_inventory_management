import React from "react";
import { Link } from "react-router-dom";
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/inventories">Inventories</Link>
      <Link to="/warehouses">Warehouses</Link>
      <Link to="/groups">Groups</Link>
    </div>
  )
}

export default Navbar;