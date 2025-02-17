import React, { useContext, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Storecontext/StoreContext";
import { toast } from "react-toastify";
// import { useAuth } from "../../AuthContext";

export default function Login() {

  const navigate = useNavigate();
  // const { login } = useAuth();
  const { setToken } = useContext(StoreContext)
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {


      const res = await axios.post(
        "http://localhost:2004/api/login",
        loginData
      );
      setToken(res.data.token);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token)
      }
      navigate("/headLogin");
      toast.success("login success", {
        position: "bottom-right",
      });
      // login(res.data.token);
    } catch (error) {
      console.error("Login failed", error);
      toast.error(" Login failed!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="login-container" id="loginPage">
      <div className="form-container">
        <form onSubmit={handleLoginSubmit}>
          <h1 className="lh1 text-black">Login</h1>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={loginData.userName}
              onChange={handleInputChange}
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p className="mt-3 text-black">
            Create your account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
