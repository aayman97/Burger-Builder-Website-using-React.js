import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'
import Aux from '../../HOC/auxillary'

const controls = [

    {label : "Cheese" , type : "cheese"},
    {label : "Bacon" , type : "bacon"},
    {label : "Meat" , type : "meat"},
    {label : "Salad" , type : "salad"}
]


const buildControls = (props) => (
 <div className = {classes.BuildControls}>


{
    controls.map( cntrl => {
        
      return  (
      <BuildControl 
      key = {cntrl.type} 
      label = {cntrl.label} 
      added = {() => props.added(cntrl.type)}
      deleted = {() => props.deleted(cntrl.type)}
      disableAllButtons = {props.disableAllButtons}
      > 
      </BuildControl>)
    } )
}

<button id = 'order' className = {classes.OrderButton} onClick = {props.order} disabled = {!props.disable} disabled ={props.disableAllButtons}> ORDER NOW </button>

 </div>

)

export default buildControls