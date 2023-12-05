import React from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetailsPage(){

    console.log("Details page");
    const {id} = useParams();

    console.log(id);

    return (
        <div className="app">
            <h1>Recipe Details</h1>
        </div>
    )
}