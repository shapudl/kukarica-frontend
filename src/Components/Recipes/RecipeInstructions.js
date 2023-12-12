import React from "react";


const RecipeInstructions = ({ instructions }) => {
  
  const content = instructions.map((instruction, index) => {
    return <div key={index}>{instruction}</div>
  })


  return (
    <>
        <h3>Instructions:</h3>
        <div>{content}</div>
    </>)
};

export default RecipeInstructions;