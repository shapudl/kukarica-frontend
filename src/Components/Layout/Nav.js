import React from "react";
import { NavLink, Form}  from "react-router-dom";
import KButton from "../Styled/Button";
import styled from "styled-components";


export default function NavBar(){

    const KNavigation = styled.nav`
    
        & ul {
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

        }
    `;

    return (
        <KNavigation>
            <ul className="nav-items">
                <li>
                    <NavLink className={({isActive}) => ( isActive ? "active" : "" )} to="/auth" end>Authorization</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => ( isActive ? "active" : "" )} to="/recipes" end>Recipe</NavLink>
                </li>
                <Form action="/logout" method="POST">
                    <KButton>Logout</KButton>
                </Form>
            </ul>
        </KNavigation>
    )
}