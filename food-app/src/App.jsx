//import { useState } from 'react'
import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import AllergyChecker from "./AllergyChecker";
import allergensData from "./allergens.json";
import RecipeSearch from "./RecipeSearch";


const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const allergens = allergensData.allergens;

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Food Allergy Checker</h1>
      {/* <IngredientInput onAddIngredient={addIngredient} class="flow-root"/> */}
      <RecipeSearch ingredients={ingredients} class="flow-root"/>
      {/* <AllergyChecker ingredients={ingredients} allergens={allergens} class="flow-root"/> */}
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column", // Stack children vertically
  alignItems: "center",      // Center horizontally
  justifyContent: "center",  // Center vertically
  height: "100vh",           // Takes the full height of the viewport
};

const titleStyle = {
  textAlign: "center",
};

export default App;