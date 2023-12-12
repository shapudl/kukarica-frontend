import React from "react";
import { NavLink, Form, useRouteLoaderData}  from "react-router-dom";
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

    const token = useRouteLoaderData("root");
    console.log(token);

    const logoutForm = token && 
            (<Form action="/logout" method="POST">
                <KButton>Logout</KButton>
            </Form>)

    return (
        <KNavigation>
            <ul className="nav-items">
                <li>
                    <NavLink className={({isActive}) => ( isActive ? "active" : "" )} to="/recipes" end>Recipes</NavLink>
                </li>
                {logoutForm}
            </ul>
        </KNavigation>
    )
}