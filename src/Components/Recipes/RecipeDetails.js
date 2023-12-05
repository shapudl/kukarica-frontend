import React from "react";
import { useQuery } from "react-query";
import { fetchRecipeById } from "../../Utils/http"; // Create this function

const RecipeDetails = ({ recipeId }) => {
  
    console.log(recipeId);
    console.log('Recipe details')

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: () => fetchRecipeById(recipeId),
    staleTime: 1000000,
    gcTime: 3000000

  });

  let content;

  if (isPending) {
    content = "Pending...";
  }

  if (isError) {
    content = "Error " + error.code;
  }

  if (data) {
    content = (
      <div>
        <h2>{data.recipe.title}</h2>
        {/* Display other details of the recipe */}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default RecipeDetails;