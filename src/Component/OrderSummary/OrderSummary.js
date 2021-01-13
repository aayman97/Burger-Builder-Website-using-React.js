import React from 'react';
import Modal from '../../UI/Modal/Modal';




const orderSummary = (props) => {
   
    const ingredient = Object.keys(props.ingredients).map(ing => <li><span> {ing} : {props.ingredients[ing]}   </span></li>)
  return(<ul>

    {ingredient}
   </ul>) 
          


   


}
export default orderSummary;