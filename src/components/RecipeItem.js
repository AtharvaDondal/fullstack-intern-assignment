import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {fetchData} from "../Service";

export default function RecipeItem(props) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");

  props.setProgress(10)
  const searchRecipe = (searchQuery) =>{
     props.setProgress(40)
    fetchData(searchQuery).then((res) =>{
      props.setProgress(70)
        setData(res);
        props.setProgress(100)
        props.setloader(false)
    })
  }

  useEffect(() => {
    props.setProgress(10)
    fetchData(query).then((res) => {
      props.setProgress(40)
      setData(res);
      props.setProgress(100)
        props.setloader(false)
    });
  }, [query]);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search your Recipe here!"
          />
          <button onClick={() => (searchRecipe(search),props.setloader(true))}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.hits.map((item, index) => (
            <div className="flexItem" key={index}>
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <a href={item.recipe.url} className= "anchorTagStyle"target="__blank">{item.recipe.label}</a>
            </div>
          ))}
      </div>
    </div>
  );
}
