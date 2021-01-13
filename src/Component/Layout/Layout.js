import React, { Component } from 'react';
import Aux from '../../HOC/auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
const layout = (props) => (

   <Aux >
        <Toolbar></Toolbar>
        <main className = {classes.content}> {props.children}</main>
    </Aux>
)

export default layout;