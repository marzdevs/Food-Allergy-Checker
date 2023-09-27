import React, { useState, useEffect } from "react";


const IngredientInput = () => {
const [ingredient, setIngredient] = useState("");
const [ingredientDetails, setIngredientDetails] = useState(null);


  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const fetchIngredientDetails = () => {
    fetch(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=apiKey=${import.meta.env.VITE_KEY}&query=${ingredient}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          // Assuming you want details of the first matching ingredient
          setIngredientDetails(data.results[0]);
        } else {
          setIngredientDetails(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching ingredient details:", error);
      });
  };

  useEffect(() => {
    if (ingredient) {
      fetchIngredientDetails();
    }
  }, [ingredient]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an ingredient"
        value={ingredient}
        onChange={handleInputChange}
      />
      {ingredientDetails && (
        <div>
          <h3>Ingredient Details</h3>
          <p>Name: {ingredientDetails.name}</p>
          <p>Description: {ingredientDetails.description}</p>
          {ingredientDetails.image && (
            <img
              src={`https://spoonacular.com/cdn/ingredients_500x500/${ingredientDetails.image}`}
              alt={`${ingredientDetails.name} Image`}
            />
          )}
          <p>Aisle: {ingredientDetails.aisle}</p>
          {/* Add more information as needed */}
        </div>
      )}
    </div>
  );
};

export default IngredientInput;
