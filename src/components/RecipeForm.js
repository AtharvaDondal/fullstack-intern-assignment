import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: '',
      image: '',
      ingredients: '',
      instructions: '',
    });
  };

  return (
    <div>
      <h2 className='headingRecipe'>Add Recipe</h2>
      <form onSubmit={handleSubmit} className='formInput'>
        <span>Add your Recipe Now!</span>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Recipe Image URL"
          value={recipe.image}
          onChange={handleChange}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />
        <button type="submit" className='formSubmitBtn'>Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
