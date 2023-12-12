import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../../Utils/http";
import KCard from "../Styled/Card";

export default function Recipes(){
    /** @todo
     * 
     * 
    + I as application user should be redirected to dashboard page after successful login
    + Dashboard page should display grid or list of recipes from all users
    ● Displayed list / grid should have pagination or infinite scroll
    ● User should be able to search recipes by title
    ● User should have button for creating new recipe
    + ● Click on recipe should open recipe details page
     */


    const { data, isPending, isError, error } = useQuery({
        queryKey: ["recipes"],
        queryFn: fetchRecipes,
        staleTime: 1000000,
        gcTime: 3000000
    })

    let content;

    if (isPending) {
        content = "Pending...";
    }

    if (isError) {
        content = "Error " + error.code; 
    }

    if (data) {
        content = (<div className="recipes-list">
             {data.recipes.map((recipe) => (
                <KCard key={recipe.id}>
                    <Link to={`${recipe.id}`}>{recipe.title}</Link>
                </KCard>
             ))}
            </div>);
    }

    return (
        <div className="recipes-list">
         {content}
        </div>
    )
}