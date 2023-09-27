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
    <div class="flex items-center p-4 float-left">
      <h1>Food Allergy Checker</h1>
      <IngredientInput onAddIngredient={addIngredient} class="flow-root"/>
      <RecipeSearch ingredients={ingredients} class="flow-root"/>
      <AllergyChecker ingredients={ingredients} allergens={allergens} class="flow-root"/>
    </div>
  );
};

export default App;