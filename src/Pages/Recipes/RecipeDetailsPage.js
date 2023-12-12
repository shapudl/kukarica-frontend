import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../../Components/Recipes/RecipeDetails";

export default function RecipeDetailsPage(){

    console.log("Details page");
    const {id} = useParams();

    console.log(id);

    return (
        <div className="app">
            <h1>Recipe Details</h1>
            <RecipeDetails recipeId={id} />
        </div>
    )
}