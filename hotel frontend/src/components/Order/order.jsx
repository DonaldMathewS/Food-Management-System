import { use } from "react";
import { StoreContext } from "../Storecontext/StoreContext"
import "./order.css"
import axios from "axios";
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Order = () => {

  const { getTotalCartAmount, token, food_list, cartItems } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",

  })
  const nav = useNavigate()
  useEffect(() => {
    if (!token) {
      nav("/cart")

    }
    else if (getTotalCartAmount() === 0) {

      nav("/cart")

    }

  }, [token])
  const onChangeHandle = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItem = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {

        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItem.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItem,
      amount: getTotalCartAmount() + 2,
    }
    let res = await axios.post("http://localhost:2004/api/placeOrder", orderData, { headers: { Authorization: `Bearer ${token}` } })
    if (res.data.success) {

      const { sessionUrl } = res.data
      window.location.replace(sessionUrl)
    }
    else {
      alert("error")
    }

  };


  return (
    <>
      <form onSubmit={placeOrder} action="" className="placeOrder">
        <div className="placeOrderLeft">
          <p className="title">Delivary Information</p>
          <div className="multifields">
            <input type="text" name="firstName" value={data.firstName} className="text" placeholder="First Name" onChange={onChangeHandle} required />
            <input type="text" name="lastName" value={data.lastName} className="text" placeholder="Last Name" onChange={onChangeHandle} required />
          </div>

          <input type="email" name="email" value={data.email} placeholder="Email address" onChange={onChangeHandle} required />
          <input type="text" name="street" value={data.street} placeholder="Street" onChange={onChangeHandle} required />

          <div className="multifields">
            <input type="text" name="city" value={data.city} className="text" placeholder="City" onChange={onChangeHandle} required />
            <input type="text" name="state" value={data.state} className="text" placeholder="State" onChange={onChangeHandle} required />
          </div>

          <div className="multifields">
            <input type="number" name="zipCode" value={data.zipCode} className="text" placeholder=" zip code" onChange={onChangeHandle} required />
            <input type="text" name="country" value={data.country} className="text" placeholder="Country" onChange={onChangeHandle} required />
          </div>

          <input type="number" name="phone" value={data.phone} placeholder="Phone" onChange={onChangeHandle} required />

        </div>
        <div className="placeOrderRight">
          <div className="cartTotal">
            <h2>Cart Total</h2>
            <div>
              <div className="cartTotalDetails">
                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartTotalDetails">
                <p>Delivary Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cartTotalDetails">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
              <button type="submit">PROCEED TO PAYMENT</button>
            </div>
          </div>

        </div>

      </form>
    </>
  )
}

export default Order
