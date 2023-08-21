import React from "react";
import Logo from "../images/brand_logo.png";
export const Navbar = () => {
  let mystyle = {
    listStyle: "none",
    padding: "10px",
  };
  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#E8E8E8",
        borderBottom: "2px solid black",
        alignItems: "center",
      }}
    >
      <div className="d-flex justify-content-between items-center ">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="d-flex justify-center">
          <li style={mystyle}>Menu</li>
          <li style={mystyle}>About</li>
          <li style={mystyle}>Services</li>
          <li style={mystyle}>Contact</li>
        </ul>
        <button
          className="btn btn-danger"
          style={{
            width: "87px",
            height: "50px",
            display: "block",
          }}
        >
          click
        </button>
      </div>
    </nav>
  );
};
