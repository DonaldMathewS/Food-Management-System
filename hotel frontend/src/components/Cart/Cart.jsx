import React, { useContext } from 'react'
import { StoreContext } from '../Storecontext/StoreContext'
import './cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { food_list, cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
    const nav = useNavigate()
    return (
        <>
            <div className="cart">
                <div className="cartItem">
                    <div className="cartItemTitle">
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>

                    </div>
                    <br />
                    <hr />
                    {food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div>
                                    <div className="cartItemTitle cartItemsItem">
                                        <img src={"http://localhost:2004/images/" + item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>{item.price * cartItems[item._id]}</p>
                                        <p className="cross" onClick={(() => removeFromCart(item._id))} >x</p>
                                    </div>
                                    <hr />
                                </div>

                            )
                        }

                    })}
                </div>
                <div className="cartBottom">
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
                            <button onClick={() => nav('/order')}>PROCEED TO CHECKOUT</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
