import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2 children = "recipe-listHeading">Your Added Recipes Are Below!</h2>
      <ul className='Recipe-List-container'>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            {/* <img src={recipe.image} alt={recipe.name} /> */}
            <img src={recipe.image} alt="recipe.label" className='recipeList-Image'/>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
