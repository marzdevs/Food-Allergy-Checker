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
    <div>
      <h1>Food Allergy Checker</h1>
      <IngredientInput onAddIngredient={addIngredient} />
      <RecipeSearch ingredients={ingredients} />
      <AllergyChecker ingredients={ingredients} allergens={allergens} />
    </div>
  );
};

export default App;