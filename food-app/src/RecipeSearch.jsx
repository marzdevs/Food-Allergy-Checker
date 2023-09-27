import React, { useState } from "react";

const RecipeSearch = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const searchRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=c3f6c6e3127d4741ac7cf45b1e23305b&ingredients=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  };

  return (
    <div>
      <h2>Search Recipes by Ingredients</h2>
      <input
        type="text"
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChange={handleInputChange}
      />
      <button onClick={searchRecipes}>Search</button>
      <div>
        <h3>Recipes</h3>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <img
                src={recipe.image}
                alt={`${recipe.title} Image`}
                width="100"
                height="100"
              />
              {recipe.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeSearch;