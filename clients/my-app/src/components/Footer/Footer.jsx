import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Dog</span>
          <span>Cat</span>
          <span>Bird</span>
          <span>Fish</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Welcome to our pet food website, your go-to destination for high-quality, 
          nutritious products to keep your pets happy and healthy. 
          Discover a curated selection of food options for every life stage and dietary preference. 
          With transparent information, strict quality standards, and excellent customer service, 
          we are here to provide the best care for your furry companions.
          Nourish your pets with joy and nutrition at every mealtime. Shop now and see the difference!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          We value your interest! For any inquiries or assistance, please reach out to us using the following contact details:

Email: info@petfoodwebsite.com
Phone: +1-012-345-6789

Our customer service team is available during business hours to address your queries and provide support. Feel free to contact us, and we'll be happy to assist you with anything you need. Thank you for choosing our pet food website!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Pet Food</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/pay thru.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;