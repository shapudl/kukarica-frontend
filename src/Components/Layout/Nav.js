import React from "react";
import { NavLink, Form}  from "react-router-dom";

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
                <Form action="/logout" method="POST">
                    <button>Logout</button>
                </Form>
            </ul>
        </nav>
    )
}