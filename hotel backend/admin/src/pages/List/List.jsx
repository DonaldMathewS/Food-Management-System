import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getFoodList = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:2004/api/getmenu");
            setList(res.data.data);
        } catch (err) {
            console.error("Error fetching food list:", err);
            toast.error("Failed to fetch food list!", {
                position: "bottom-right",
            });
        } finally {
            setLoading(false);
        }
    };

    const removeFood = async (foodid) => {
        console.log(foodid);
        const res = await axios.post("http://localhost:2004/api/delFood", { id: foodid });

        getFoodList();
        if (res.data.success) {
            toast.success("Food removed", {
                position: "bottom-right",
            });
        } else {
            toast.error("Failed to remove food!", {
                position: "bottom-right",
            });
        }
    };

    useEffect(() => {
        getFoodList();
    }, []);

    return (
        <>
            <div className="list add flex-col">
                <p>Food List</p>
                {loading ? (
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Loading food list...</p>
                    </div>
                ) : (
                    <div className="listTable">
                        <div className="listTableFormat title">
                            <b>Name</b>
                            <b>Category</b>
                            <b>Price</b>
                            <b>Action</b>
                        </div>
                        {list.map((item, index) => (
                            <div key={index} className="listTableFormat">
                                <p>{item.name}</p>
                                <p>{item.category}</p>
                                <p>${item.price}</p>
                                <p onClick={() => removeFood(item._id)} className="curser">
                                    x
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default List;
