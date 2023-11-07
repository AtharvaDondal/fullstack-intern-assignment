import { useState } from "react";
import Header from "./components/Header";
import RecipeItem from "./components/RecipeItem";
import Tabs from "./components/Tabs";
import LoadingBar from 'react-top-loading-bar'
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./RecipeList";


function App() {

  const [loader, setloader] = useState(true);
  const [progress, setProgress] = useState(0)

  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  return (
    <>
     <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Header/>
      <Tabs setloader = {setloader} setProgress = {setProgress} recipes = {recipes}/>
      <RecipeItem setloader = {setloader} setProgress = {setProgress}/>
      {loader && <div className="loader">
        <div className="spinner"></div>
      </div> }
      <RecipeList recipes = {recipes}/>
    <RecipeForm addRecipe={addRecipe}/>
    
    </>
  );
}

export default App;
