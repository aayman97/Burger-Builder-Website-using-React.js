import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) =>{
return(

<header className = { classes.Toolbar}> 
<Logo></Logo>
<div>Menu</div>
<nav>
  <NavigationItems></NavigationItems>
</nav>
</header>

)

}

export default toolbar;