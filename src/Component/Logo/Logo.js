import React from 'react';
import burgerLogo from '../../Assets/Images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props)=>(

 <div className = {classes.Logo} >
     <img className="rounded float-left" src = {burgerLogo} alt = "BurgerLogo"></img>
 </div>

)

export default logo;