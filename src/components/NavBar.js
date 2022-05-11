import React from "react"
import {NavLink} from "react-router-dom";

function NavBar () {
    const linkStyles = {
        display: "inline-block",
        width: "60px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
    <div className="navbar">
        <NavLink to="/" style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
        Home</NavLink>
        <NavLink style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}to="/adopt"> 
        Adopt </NavLink>
        <NavLink style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}to="/residentList">
             Discover </NavLink>
    </div>
    )
}

export default NavBar