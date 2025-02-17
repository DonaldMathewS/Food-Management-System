import React, { useState } from 'react'
import './add.css'
import axios from "axios"

import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'

const Add = () => {
    const [image, setimage] = useState(false)
    const [data, setdata] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })
    const onChangeHandle = (e) => {
        const { name, value } = e.target

        setdata({ ...data, [name]: value })
    }
    const onsubmitHandel = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('description', data.description)
            formData.append('price', Number(data.price))
            formData.append('category', data.category)
            formData.append('image', image)

            const res = await axios.post("http://localhost:2004/api/createMenu", formData)
            if (res.data.success) {

                setdata({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad"

                })
                setimage(false)
                toast.success(res.data.message, {
                    position: "bottom-right",
                }); 

            }

        } catch (error) {
            console.error("food not added", error)
            toast.error(" Food not added!", {
                position: "bottom-right",
            });
        }
    }


    return (
        <>
            <div className="add">
                <form className="flex-col" onSubmit={onsubmitHandel}>
                    <div className="addImageUpload flex-col" >
                        <p>Upload Image</p>
                        <label htmlFor="image">
                            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                        </label>
                        <input type="file" id='image' hidden required onChange={(e) => setimage(e.target.files[0])} />

                    </div>
                    <div className="addProductName flex-col">
                        <p>Product Name</p>
                        <input value={data.name} type="text" name='name' placeholder='type name' onChange={onChangeHandle} />
                    </div>
                    <div className="addProductDescription flex-col ">
                        <p>Product Description</p>
                        <textarea value={data.description} name="description" rows='6' placeholder='write content here' required onChange={onChangeHandle}></textarea>
                    </div>
                    <div className="addCatPrice">
                        <div className="addCat flex-col">
                            <p>Product Category</p>
                            <select name="category" value={data.category} onChange={onChangeHandle}>
                                <option value="Salad">Salad</option>
                                <option value="Rolls">Rolls</option>
                                <option value="Deserts">Deserts</option>
                                <option value="Sandwich">Sandwich</option>
                                <option value="Cake">Cake</option>
                                <option value="Pure Veg">Pure Veg</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Noodles">Noodles</option>
                            </select>
                        </div>
                        <div className="addPrice flex-col">
                            <p>Product Price</p>
                            <input type="number" name='price' placeholder='$20' value={data.price} onChange={onChangeHandle} />
                        </div>
                    </div>
                    <button type='submit' className='add-btn'>ADD</button>
                </form>
            </div>
        </>
    )
}

export default Add
