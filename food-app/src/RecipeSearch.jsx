import React, { useState } from "react";

const RecipeSearch = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const searchRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${import.meta.env.VITE_KEY}&ingredients=${ingredients}`
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
    <div style={containerStyle}>
      <h2>Search Recipes by Ingredients</h2>
      <input
        type="text"
        placeholder="Enter ingredients (comma-separated)"
        style={inputStyle}
        value={ingredients}
        onChange={handleInputChange}
      />
      <button style={buttonStyle} onClick={searchRecipes}>
        Search
      </button>
      <div>
        <h3>Recipes</h3>
        <ul style={recipeListStyle}>
          {recipes.map((recipe) => (
            <li style={recipeItemStyle} key={recipe.id}>
              <img
                src={recipe.image}
                alt={`${recipe.title} Image`}
                style={recipeImageStyle}
              />
              {recipe.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Define inline styles
const containerStyle = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const recipeListStyle = {
  listStyle: "none",
  padding: 0,
};

const recipeItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
};

const recipeImageStyle = {
  marginRight: "10px",
  borderRadius: "5px",
};

export default RecipeSearch;
