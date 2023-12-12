import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../Components/Layout/Nav";
import styled from "styled-components";


const KRootLayout = styled.div`
    color: var(--text-color);
    font-family: var(--)

`;

const KMainTitle = styled.h1`
    font-family: var(--secondary-font);

    font-size: 4rem;
    text-align:center;

    text-transform: uppercase;

`;


export default function RootLayout(){

    return (
        <KRootLayout>
            <Nav/>
            <KMainTitle>-Kukarica-</KMainTitle>
            <Outlet/>
        </KRootLayout>
    )
}