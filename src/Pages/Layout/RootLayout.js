import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../Components/Layout/Nav";


export default function RootLayout(){

    return (
        <div className="app">
            <Nav/>
            <Outlet/>
        </div>
    )
}