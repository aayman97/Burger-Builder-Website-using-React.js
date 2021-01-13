import React ,{Component}from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import Aux from '../../HOC/auxillary';
import classes from './Burger.module.css';


const burger = (props) => {
    
    function myHelper(ing) {
        let myArray = [];

        for(let i=0; i< props.ingredients[ing]; i++){
            
            myArray.push(<BurgerIngredient key={ing + i} type={ing.toString()} />)
        }
         
        return myArray
 }

 let temp = [];
 let ingredients = Object.keys(props.ingredients)
 .map(ing => {
 
  temp.push(myHelper(ing))

} )

ingredients = temp
ingredients = ingredients.flat()

 if(ingredients.length === 0){
   ingredients = <BurgerIngredient> Select the ingredients </BurgerIngredient>
         
    
 }


return <div className = {classes.burgerTemp}>
    <BurgerIngredient type = 'bread-top'></BurgerIngredient>
     {ingredients}
    <BurgerIngredient type = 'bread-bottom'></BurgerIngredient>
</div>

}

export default burger;

