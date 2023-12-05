import React from "react";
import { Outlet } from "react-router-dom";

export default function Root(){

    return (
        <div>
            <h1>Page</h1>
            <Outlet />
        </div>
    )
}