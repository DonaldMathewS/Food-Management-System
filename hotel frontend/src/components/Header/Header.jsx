import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button.js";
import { assets } from "../../../../hotel frontend/src/food hotel assets/admin_assets/assets";
const Head = () => {
  return (
    <>
      <div id="he">
        <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
          <Link to="/login" className="navbar-brand">
            <div className="logo">
              <img src={assets.logo1} alt="" />
            </div>
          </Link>
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
                <Link to="/login" className="nav-link">
                  Home
                </Link>
              </li>{" "}
              <li className="nav-item ">
                <Link to="/login" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/login" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Comments
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/login">
              <Button className="white-button">login</Button>
            </Link>
          </div>
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

export default Head;
