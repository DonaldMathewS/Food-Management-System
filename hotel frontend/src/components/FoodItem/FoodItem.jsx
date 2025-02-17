import React, { createContext, useContext, useState } from "react";
import { assets } from "../../food hotel assets/frontend_assets/assets.js";
import "./FoodItem.css";
import { StoreContext } from "../Storecontext/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  return (
    <div className="foodItem">
      <div className="foodItemImage-container">
        <img className="foodItemImage" src={"http://localhost:2004/images/" + image} alt="" />
        {!cartItems[id] ?
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
          :
          <div className="foodItemcounter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p >{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="foodItemInfo">
        <div className="foodItemNameRating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <div className="foodItemDescription">
          <p>{description}</p>
          <p className="foodItemPrice">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
