import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

import { assets } from '../../food hotel assets/frontend_assets/assets';

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/comments');
  };

  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <Link to="/headLogin"> <img src={assets.logo1} alt="" /></Link>
          <p>change the paragraph tag </p>
        </div>
        <div className="footerSocialIcons">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
        <div className="footerContentCenter">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            <li>Comment your food </li>
          </ul>

        </div>
        <div className="footerContentRight ">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li className='lii text-dark'>09384783833</li>
            <li className='lii text-dark'>contact@123gmailo.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyright text-dark">@Copyright</p>

    </div>

  );
};

export default Footer;
