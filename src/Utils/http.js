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

export const login =  async (authData) => {

    const response = await fetch(
        "https://login-zazjbx7nka-uc.a.run.app/",
        {
            method: "POST", 
            headers:                 {
                "authId" : "OwqXLfHm5ATR8pgL4PC2y0PbuGu2",
                "Content-type" : "application/json"
            },
            body: JSON.stringify(authData)
        });


    if (!response.ok) {
      throw new Error(`Error while trying to login`);
    }

    return response.json();
};

export const createUser = async(createData) => {
    const response = await fetch(
        "https://addappuser-zazjbx7nka-uc.a.run.app/",
        {
            method: "POST", 
            headers: 
            {
                "authId" : "OwqXLfHm5ATR8pgL4PC2y0PbuGu2",
                "Content-type" : "application/json"
            },
            body: JSON.stringify(createData)
        });

    if (!response.ok) {
        throw new Error(`Error while trying to create user`);
    }

    return response.json();
}
