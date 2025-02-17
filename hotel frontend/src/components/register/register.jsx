import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { StoreContext } from '../Storecontext/StoreContext';

export default function Register() {
  const nav = useNavigate();
  const { setToken } = useContext(StoreContext)
  const [error, setError] = useState("")
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const eventHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.userName || !user.email || !user.password || !user.confirmPassword) {
      setError('All fields are required 🚫')
      return
    }
    if (user.password !== user.confirmPassword) {
      setError('Password do not match 🚫')
      return;
    }
    setError("")
    try {


      const res = await axios.post('http://localhost:2004/api/createUser', user)
      console.log('####', res.data);
      setToken(res.data.token);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token)
      }
      nav('/headLogin');

    } catch (error) {
      console.error(error);
      setError("Something went wrong! Please try again.");

    }
  };

  return (
    <>
      <div className="register-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1 className="rh1 text-black">Register</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputUsername" className="form-label">Username</label>
              <input
                type="text" name="userName"
                className="form-control"
                id="exampleInputUsername"
                value={user.userName}
                onChange={eventHandle}
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email" name="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter E-mail"
                value={user.email}
                onChange={eventHandle}
              />
              <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password" name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Create password "
                value={user.password}
                onChange={eventHandle}
              />
              <div className="mb-3">
                <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>               <input
                  type="password" name="confirmPassword"
                  className="form-control"
                  id="exampleInputConfirmPassword"
                  placeholder="Confirm your password"
                  value={user.confirmPassword}
                  onChange={eventHandle}
                /></div>
            </div>
            {error && <div className='error-message'>{error}</div>}
            <button type="submit" className="btn btn-primary">Register</button>
            <p className="mt-3 text-black">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
