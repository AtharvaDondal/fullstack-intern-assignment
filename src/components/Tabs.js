import React, { useState, useEffect } from "react";
import { CiPizza } from "react-icons/ci";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { fetchTabData } from "../Service";

export default function Tabs(props) {
    const [tabData, setTabData] = useState("")
    const [active, setActive] = useState("Pizza")
  const [tablabel, setTablabel] = useState([
    {
      name: "pizza",
      icon: <CiPizza />,
      id: "0209cb28fc05320434e2916988f47b71"
    },
    {
      name: "Noodles",
      icon: <GiNoodles />,
      id: "f6c558e7be19bf7645624eb6ae2ea855 ",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "eb3e2b49525a0c8ce7327436f843321a  ",
    },
    {
      name: "Ice cream",
      icon: <MdOutlineIcecream />,
      id: "dc0bd9f18c68a5710d0fc3fda6512b7b",
    },
  ]);
  const handleOnClick = (name,id) => {
    setActive(name);
    fetchTabData(id).then((res) =>{
        setTabData(res)
        props.setloader(false)
    })
  }

  useEffect(() => {
    fetchTabData(tablabel[0].id).then((res) =>{
        setTabData(res);
        props.setloader(false)
        console.log(res)
    })
    })


    // const RecipeList = ({ recipes }) => {
    //   return (
    //     <div>
    //       {/* <h2>Recipes</h2> */}

    //     </div>
    //   );
    // };
  
  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>

      <div className="tabs">
        {tablabel.map((item, index) => (
          <div key = {index} onClick = {() => (handleOnClick(item.name,item.id).props.setloader(true))}className={`tablist ${active === item.name ? "active" : "" }`}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}

      </div>

      <div className="recipe_banner">
        {
            tabData != "" && 
            <>
            <div className="left-col">
          <span className="badge">{tabData.recipe.cuisineType[0]}</span>
          <h1>{tabData.recipe.label}</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>{tabData.recipe.source}</small>
          </p>
          <h3>Ingredients</h3>
          <div className="ingredients">
            <ul>
                {tabData.recipe.ingredientLines.map((list,index)=>(
                     <li key={index}>
                     <GiCheckMark size="18px" color="#6fcb9f" />
                     &nbsp;<span>{list}</span>
                   </li>
                ))}
            </ul>
          
          </div>
        </div>
        <div className="right-col">
          <div className="image-wrapper">
            <img
              src={tabData.recipe.image}
              alt={tabData.recipe.label}
            />              
          </div>
        
        </div>
      
            </>
        }
       </div>
    </div>
  );
}
