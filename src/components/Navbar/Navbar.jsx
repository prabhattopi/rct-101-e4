import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../store/auth/auth.actions";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.data)
  // if(cartItems.length>0){
  //   let cartItemsCount=cartItems.length
  //   console.log(cartItemsCount)
  // }
  // console.log(cartItems)
 
  
  const {data}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
 const handlelogout=()=>{
  if(data.isAuthenticated){
    dispatch(logoutApi())
    navigate("/login");
  }
  else{
    navigate("/login");
  }
 }
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link" to="/">Logo</a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">cart{cartItems && cartItems.length>0?cartItems.length:0}</div>
        <button data-cy="navbar-login-logout-button" onClick={handlelogout}>{data.isAuthenticated?"Logout":"login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
