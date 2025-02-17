import React, { useEffect, useState } from "react";
import "./UserOrder.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const UserOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAllOrders = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:2004/api/listOrder");

            if (res.data.success) {
                setOrders(res.data.data);
                console.log(res.data.data);
            } else {
                toast.error("Failed to fetch food list!", {
                    position: "bottom-right",
                });
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            toast.error("An error occurred while fetching orders!", {
                position: "bottom-right",
            });
        } finally {
            setLoading(false);
        }
    };

    const statusHandle = async (event, orderId) => {
        const res = await axios.post("http://localhost:2004/api/updatestatus", {
            orderId,
            status: event.target.value,
        });
        if (res.data.success) {
            await fetchAllOrders();
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        <>
            <div className="order add">
                <h3>Order Page</h3>
                {loading ? (
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Loading orders...</p>
                    </div>
                ) : (
                    <div className="orderList">
                        {orders.length > 0 ? (
                            orders.map((order, index) => (
                                <div key={index} className="orderItem">
                                    <img src={assets.parcel_icon} alt="" />
                                    <div>
                                        <p className="orderItemFood">
                                            {order.items.map((item, index) => {
                                                if (index === order.items.length - 1) {
                                                    return item.name + " x " + item.quantity;
                                                } else {
                                                    return item.name + " x " + item.quantity + ", ";
                                                }
                                            })}
                                        </p>
                                        <p className="orderItemName">
                                            {order.address.firstName + " " + order.address.lastName}
                                        </p>
                                        <div className="orderItemAddress">
                                            <p>{order.address.street + ","}</p>
                                            <p>
                                                {order.address.city +
                                                    ", " +
                                                    order.address.state +
                                                    ", " +
                                                    order.address.country +
                                                    ", " +
                                                    order.address.zipCode}
                                            </p>
                                        </div>
                                        <p className="orderItemPhoneNo">{order.address.phone}</p>
                                    </div>
                                    <p>Items : {order.items.length}</p>
                                    <p>$ {order.amount}</p>

                                    <select
                                        onChange={(event) => statusHandle(event, order._id)}
                                        value={order.status}
                                    >
                                        <option value="Food Processing">Food Processing</option>
                                        <option value="Out for Delivery">Out for Delivery</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </div>
                            ))
                        ) : (
                            <p>No orders found.</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default UserOrders;
