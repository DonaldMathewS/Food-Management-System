import React, { useContext, useState } from "react";
import "./Header.css";

import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { assets } from "../../food hotel assets/frontend_assets/assets";
import { StoreContext } from "../Storecontext/StoreContext";


const Logout = () => {
  const { getTotalCartAmount, setToken } = useContext(StoreContext)
  const nav = useNavigate()
  const moveOut = () => {
    localStorage.removeItem('token')
    setToken("")
    nav('/')
  }
  return (
    <>
      <div id="he">
        <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
          <div className="logo">
            <img src={assets.logo1} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="coqllapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#home">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#menu">
                  Menu{" "}
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Comments <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="navCart">
            <Link to="/cart">
              <img
                className="basketIcon ml-2"
                src={assets.basket_icon}
                alt=""
              />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <div className="navbarProfile ml-4">
            <img src={assets.profile_icon} alt="Profile Icon" />
            <ul className="navProfileDropdown">
              <li onClick={() => nav("/myOrder")}>
                <img src={assets.bag_icon} alt="Order Icon" />
                <p>Order</p>
              </li>
              <hr />
              <li onClick={moveOut}>
                <img src={assets.logout_icon} alt="Logout Icon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
          {/* <div>
            <Link to="/login">
              <Button className="white-button ml-3">logout</Button>
            </Link>
          </div> */}
        </nav>
      </div>
      <div className="container-fluid">
        <section id="home">
          <div className="headline">
            <h1 className="head">HoTeL</h1>
          </div>
          <div id="flex" className="tagline">
            <h2 className="word one">Enjoy</h2>
            <h2 className="word two">a</h2>
            <h2 className="word three">taste</h2>
            <h2 className="word four">of</h2>
            <h2 className="word five">heaven</h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Logout;
