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
        <li><Link to="TaskList">Task</Link></li>
        <li><Link to="Department">Department</Link></li>
        {/* <li><Link to="postList">PostList</Link></li> */}
        <li><Link to="PostForm">PostForm</Link></li>
      </ul>
    </div>
  )
}

export default Menu;
