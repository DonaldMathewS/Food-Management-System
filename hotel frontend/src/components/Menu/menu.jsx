import React, { useContext } from "react";
import { StoreContext } from "../Storecontext/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./menu.css";

const Menu = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="foodDisplay" id="menu">
      <h2>Top Dishes </h2>
      <div className="foodDisplayList">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
