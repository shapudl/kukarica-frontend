export async function fetchRecipes() {
    const response = await fetch(
        'https://getrecipes-zazjbx7nka-uc.a.run.app/',
        { 
            headers: 
            {
                "authId" : "OwqXLfHm5ATR8pgL4PC2y0PbuGu2"
            }
        });

    if (!response.ok) {
        const error = new Error('An error occured while fetching recipes.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const recipes = await response.json();

    return recipes;
}

export const fetchRecipeById = async (recipeId) => {
    const response = await fetch(
        `https://getrecipe-zazjbx7nka-uc.a.run.app/?recipeId=${recipeId}`,
        { 
            headers: 
            {
                "authId" : "OwqXLfHm5ATR8pgL4PC2y0PbuGu2"
            }
        });
    if (!response.ok) {
      throw new Error(`Error fetching recipe with ID ${recipeId}`);
    }
    return response.json();
  };


  