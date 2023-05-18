import React from "react";
import "./Navbar.css";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="Navbar">

      <a onClick={()=> {
          navigate('/')
        }} className="nav-logo">AAAEYEMEK</a>

      <div className={`nav-items open"}`}>

        <a onClick={()=> {
          navigate('/restaurant')
        }} className="nav-option" >RESTAURANTS</a>

        <a onClick={()=> {
          navigate('/signin')
        }} className="nav-option" >LOG IN</a>

        <a onClick={()=> {
          navigate('/restaurantsignup')
        }} className="nav-option" >RESTAURANT SIGN UP</a>

        <a onClick={()=> {
          navigate('/signup')
        }} className="nav-option" >SIGN UP</a>

        <a onClick={()=> {
          navigate('/updateuser')
        }} className="nav-option" >UPDATE USER</a>

        <a onClick={()=> {
          navigate('/updaterestaurant')
        }} className="nav-option" >UPDATE RESTAURANT</a>

        <a onClick={()=> {
          navigate('/addfood')
        }} className="nav-option" >ADD FOOD</a>

        
        
      </div>
    </div>
  );
};

export default Navbar;