import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                to="/blog"
                exact
            >
                Blog
            </NavLink>
            <NavLink
                to="/write"
                exact
            >
                Write
            </NavLink>
        </div>
    )
}

export default NavBar;