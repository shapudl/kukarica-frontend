import React from "react";
import { NavLink }  from "react-router-dom";

export default function NavBar(){
    return (
        
        <nav className="nav">
            <ul className="nav-items">
                <li>
                    <NavLink className={({isActive}) => ( isActive ? "active" : "" )} to="/auth" end>Authorization</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => ( isActive ? "active" : "" )} to="/recipes" end>Recipe</NavLink>
                </li>
            </ul>
        </nav>
    )
}