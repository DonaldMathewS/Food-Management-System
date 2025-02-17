import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarOptions">
                    <NavLink to='/add' className="sidebarOption">
                        <img src={assets.add_icon} alt="" />
                        <p>Add items</p>
                    </NavLink>
                    <NavLink to='/list' className="sidebarOption">
                        <img src={assets.order_icon} alt="" />
                        <p>List items</p>
                    </NavLink>
                    <NavLink to='/orders' className="sidebarOption">
                        <img src={assets.add_icon} alt="" />
                        <p>order</p>
                    </NavLink>
                </div>
            </div>

        </>
    )
}

export default SideBar
