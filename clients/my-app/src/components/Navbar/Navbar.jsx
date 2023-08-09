import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { User, useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  const { loginWithRedirect, isAuthenticated, logout,user } = useAuth0()
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            
          </div>
          <div className="it">
             <SearchIcon/>
            <span>Search by preferences</span>
            <ArrowForwardOutlinedIcon/>
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Dog</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Cat</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Bird</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">Fish</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">PET FOOD</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/login/1"></Link>
          </div>
          
         
               {isAuthenticated && (<div><PersonOutlineOutlinedIcon/> 
         </div>)}
         {
           isAuthenticated?(<div className="logout">
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
          </div>
           ):(<div className="login"><button onClick={() => loginWithRedirect()}>Log In</button></div>)

         }

          
          
          <div className="icons">
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;



