import React from 'react'
import { useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom"
const Purchase = () => {

    const items=useSelector((state)=>state.allProducts.cartitems)

    const navigate = useNavigate();
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
              
              
            </div>
          );
        })}
      <h2>Thankyou!.. Order Successful</h2>
      <button className="cart_button" onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  )
}

export default Purchase
