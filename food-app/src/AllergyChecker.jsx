// AllergyChecker.js
import React from "react";

const AllergyChecker = ({ ingredients, allergens }) => {
  const checkAllergies = () => {
    const allergenicIngredients = ingredients.filter((ingredient) =>
      allergens.includes(ingredient)
    );

    if (allergenicIngredients.length === 0) {
      alert("No allergens found!");
    } else {
      alert(`Allergenic ingredients: ${allergenicIngredients.join(", ")}`);
    }
  };

  return (
    <div>
      <h2>Allergy Checker</h2>
      <button onClick={checkAllergies}>Check Allergies</button>
    </div>
  );
};

export default AllergyChecker;
