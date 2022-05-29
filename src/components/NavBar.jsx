import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <React.Fragment>
            <div>
                <h1>Link Directory!</h1>
            </div>
            <div>
                <div>
                     <NavLink to={"/home"}>Home</NavLink>
                </div>
                <div>
                     <NavLink to={"/about"}>About</NavLink>
                </div>
            </div>         
        </React.Fragment>
    )
}