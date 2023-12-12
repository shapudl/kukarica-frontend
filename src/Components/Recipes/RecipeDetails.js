import React from "react";
import { useQuery } from "react-query";
import { fetchRecipeById } from "../../Utils/http"; 
import RecipeInstructions from "./RecipeInstructions";
import KCard from "../Styled/Card";

const RecipeDetails = ({ recipeId }) => {
  
  console.log(recipeId);

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
      <KCard>
        <h2>{data.recipe.title}</h2>
        <RecipeInstructions instructions={data.recipe.instructions}/>
      </KCard>
    );
  }

  return <div>{content}</div>;
};

export default RecipeDetails;