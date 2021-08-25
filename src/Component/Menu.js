import React from "react";
import './Menustyle.css'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menustyle">
      <ul>
        <li> <Link to="Certificate">Certificate</Link> </li>
        <li><Link to="ItemMaster">Item Master</Link></li>
        <li><Link to="VenderMaster">Vender Master</Link></li>
        <li><Link to="ItemMaster">user Alocation</Link></li>
      </ul>
    </div>
  )
}

export default Menu;
