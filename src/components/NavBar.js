import React from "react"
import {NavLink} from "react-router-dom";

function NavBar () {
    const linkStyles = {
        display: "inline-block",
        width: "60px",
        padding: "12px",
        margin: "6px 6px 6px",
        background: "green",
        textDecoration: "none",
        color: "white",
      };

    return (
    <div className="navbar">
        <NavLink to="/" exact style={linkStyles}
        activeStyle={{
          background: "darkgreen",
        }}>
        Home</NavLink>
        <NavLink style={linkStyles}
        activeStyle={{
          background: "darkgreen",
        }}to="/adopt"> 
        Adopt </NavLink>
        <NavLink style={linkStyles}
        activeStyle={{
          background: "darkgreen",
        }}to="/residentList">
             Discover </NavLink>
    </div>
    )
}

export default NavBar