import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
      <script src="https://kit.fontawesome.com/3612fd4e51.js"></script>
      <div className="logo">
        <img src="https://image.flaticon.com/icons/png/512/87/87390.png"/>
      </div>
      <ul>
        <li>Find People</li>
        <li>Activity Feed</li>
        <li>Profile</li>
      </ul>

    </div>
  );
}
export default Navbar