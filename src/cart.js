import React from 'react'
import { useSelector,useDispatch} from 'react-redux'

import { delItem } from './redux/actions/productActions'
import {useNavigate} from "react-router-dom"

const CartPage = () => {

    const dispatch=useDispatch();
    const navigate = useNavigate();

 const items=useSelector((state)=>state.allProducts.cartitems)

//console.log(items);
const removeFromCart =(recipe)=>{
  console.log(recipe);
  dispatch(delItem(recipe))
  
}
 

  return (
    <div>
     {items && items.map((recipe, index) => {
          return (
            <div className="recipe_class" key={index}>
              <p className="recipe_name">{recipe.strCategory}</p>
              <img
                className="recipe_img"
                src={recipe.strCategoryThumb}
                alt={recipe.strCategory}
              />
              
              <button className="cart_button" onClick={()=>(removeFromCart(recipe))}>Remove from cart</button>
            </div>
          );
        })}
        <button className="cart_button"onClick={()=>navigate("/checkout")}>Proceed to checkout</button>
    </div>
  )
}

export default CartPage
