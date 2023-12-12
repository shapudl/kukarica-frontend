import React from "react";
import { Outlet } from "react-router-dom";

export default function RecipesLayout(){

    return (
        <div className="app">
            <h1>Recipes</h1>
            <Outlet />
        </div>
    )
}