import React from "react";
import axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";
import "../App.css";
// import "./key"
// const YOUR_APP_ID = "c3d4b172";
// const YOUR_APP_KEY = "1c358e27b4028de6a0640320aca5b52d";

const Recipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");

  const api = `https://api.edamam.com/search?q=${query}&app_id=c3d4b172&app_key=1c358e27b4028de6a0640320aca5b52d&health=${healthLabel}`;
  async function GetRecipes() {
    var result = await axios.get(api);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    GetRecipes();
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-column text-center p-4">
        <h1>
          Food Recipes Plaza
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/40/000000/external-burger-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png" />
          <img src="https://img.icons8.com/office/40/000000/kawaii-french-fries.png" />
          <img src="https://img.icons8.com/doodle/40/000000/pizza--v1.png" />
        </h1>
        <form className="app__seacrchForm mt-2" onSubmit={onSubmit}>
          <input
            type="text"
            className="search pt-2 pb-2 text-center"
            placeholder="Enter Ingridient"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onClick={()=>onSubmit}
          />
          <input
            className="submit pt-1 pb-1 m-2 btn-primary rounded text-light"
            type="submit"
            value="Search"
          />
          <select className="select pt-1 pb-1 text-center rounded btn-secondary" type="submit" value="Search">
            <option 
              onClick={() => {
                setHealthLabel("vegan");
              }}
            >Vegan</option>
            <option 
              onClick={() => {
                setHealthLabel("paleo");
              }}
            >paleo</option>
            <option 
              onClick={() => {
                setHealthLabel("dairy-free");
              }}
            >dairy-free</option>
            <option 
              onClick={() => {
                setHealthLabel("gluten-free");
              }}
            >gluten-free</option>
            <option 
              onClick={() => {
                setHealthLabel("low-sugar");
              }}
            >low-sugar</option>
            <option 
              onClick={() => {
                setHealthLabel("egg-free");
              }}
            >egg-free</option>
            <option 
              onClick={() => {
                setHealthLabel("peanut-free");
              }}
            >peanut-free</option>
            <option 
              onClick={() => {
                setHealthLabel("tree-nut-free");
              }}
            >tree-nut-free</option>
            <option 
              onClick={() => {
                setHealthLabel("soy-free");
              }}
            >soy-free</option>
            <option 
              onClick={() => {
                setHealthLabel("fish-free");
              }}
            >fish-free</option>
            <option 
              onClick={() => {
                setHealthLabel("shellfish-free");
              }}
            >shellfish-free</option>
          </select>
        </form>
      </div>
      <div className="app_recipe justify-content-center text-center ">
        {recipes.map((i,idx) => {
          return <RecipeTile key={idx} recipe={i} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
