import React, { useState } from "react";

const RecipeSearch = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const searchRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${import.meta.env.VITE_KEY}&ingredients=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setIsModalOpen(true); // Open the modal
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  };

  // Define styles for the modal and its content
  const modalStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "#F1EFEB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modalContentStyle = {
    background: "#F6F6F6",
    padding: "20px",
    borderRadius: "5px",
    maxHeight: "80vh",
    overflowY: "auto",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#007bff",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
  };

  
const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "24px",       
  color: "red",           
  background: "none",
  border: "none",
  cursor: "pointer",
};


  // Define other styles
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
      {isModalOpen && ( // Render the modal when isModalOpen is true
        <div style={modalStyle}>
          <div style={modalContentStyle}>
          <button
              style={closeButtonStyle}
              onClick={closeModal}>
              &times;
            </button>
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
      )}
    </div>
  );
};

export default RecipeSearch;
