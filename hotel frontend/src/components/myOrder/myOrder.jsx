import React, { useContext, useEffect, useState } from 'react'
import './myOrder.css'
import { StoreContext } from '../Storecontext/StoreContext'
import axios from 'axios'
import { assets } from '../../food hotel assets/admin_assets/assets'

const MyOrder = () => {
    const [data, setData] = useState([])
    const { token } = useContext(StoreContext)
    const fetchOrders = async () => {
        const res = await axios.post("http://localhost:2004/api/userOrder", {}, { headers: { Authorization: `Bearer ${token}` } })
        setData(res.data.data)
        console.log(res.data.data)
    }
    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <>
            <div className="myOrders">
                <h2>My Orders</h2>
                <div className="container">
                    {data.map((order, index) => {
                        return (
                            <div key={index} className="myOrdersOrder">
                                <img src={assets.parcel_icon} alt="" />
                                <p>{order.items.map((item, index) => {
                                    if (index == order.items.length - 1) {
                                        return item.name + " x " + item.quantity
                                    } else {
                                        return item.name + "  x  " + item.quantity + " , "
                                    }

                                })}</p>
                                <p>${order.amount}</p>
                                <p>items:{order.items.length}</p>
                                <p><span>&#x25cf;</span><b>{order.status}</b></p>
                                <button onClick={fetchOrders()}>Track Order</button>

                            </div>
                        )
                    })}
                </div>

            </div>

        </>
    )
}

export default MyOrder
