import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from "./redux/actions/productActions";

import {useNavigate} from "react-router-dom"

function App() {
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  const [recipes, setrecipes] = useState([]);
  const [searchitem, setsearchitem] = useState("");
  const [show, setshow] = useState(false);
  const dispatch=useDispatch();

 const items=useSelector((state)=>state.allProducts.cartitems)
 //console.log(items);
 const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
     
      setrecipes(response.data.categories);
      console.log(response.data.categories);
      // console.log(recipes);
    }
    fetchData();
  }, []);
  
  const addTocart =(recipe)=>{
   
    dispatch(addItem(recipe))
    //console.log(recipe.strCategory);
  }

  return (
    <div className="App">
      <button onClick={()=>navigate("/cart")}>Go to cart {items.length}</button>
      <h2>MEAL APP</h2>
      <form className="searchform">
        <input
          className="app_input"
          type="text"
          placeholder="Type a meal..."
          value={searchitem}
          onChange={(e) => setsearchitem(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
      </form>
      {recipes
        .filter((recipe) => {
          // console.log(recipe);
          if (searchitem == "") {
            return recipe;
          } else if (
            recipe.strCategory.toLowerCase().includes(searchitem.toLowerCase())
          ) {
            return recipe;
          }
        })
        .map((recipe, index) => {
          return (
            <div className="recipe_class" key={index}>
              <p className="recipe_name">{recipe.strCategory}</p>
              <img
                className="recipe_img"
                src={recipe.strCategoryThumb}
                alt={recipe.strCategory}
              />
              <button className="cart_button" onClick={() => setshow(!show)}>
                Description
              </button>
              {show && <p>{recipe.strCategoryDescription}</p>}
              <button className="cart_button" onClick={()=>(addTocart(recipe))}>Add to cart</button>
            </div>
          );
        })}
        
    </div>
    
  );
}

export default App;
