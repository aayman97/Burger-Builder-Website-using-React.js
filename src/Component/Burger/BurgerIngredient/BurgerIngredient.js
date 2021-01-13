import React ,{Component} from 'react';
import classes from './BurgerIngredient.module.css';
import PropsType from 'prop-types';

class BurgerIngredient extends Component {

    render() { 

       
        let ingredient = null;
        
       
switch(this.props.type){

    case('bread-bottom'):
        ingredient = <div className = {classes.BreadBottom} >  </div>
        break;
    case('bread-top'):
        ingredient = <div className = {classes.BreadTop}>
          
        </div>
        break;
     case('meat'):
        ingredient =   <div className = {classes.Meat}> </div>
        break;  
    case('cheese'):
        ingredient = <div className = {classes.Cheese}>  </div>
        break;  
    case('salad'):
        ingredient = <div className = {classes.Salad}>  </div>
        break;      
     case('bacon'):
        ingredient = <div className = {classes.Bacon}>  </div>
        break;          
    default: 
        ingredient = <div className = {classes.text}>{this.props.children}</div>;
        
}

        return (ingredient) ;
    }
}

BurgerIngredient.PropsType = {
    ingredient : PropsType.string.isRequired
}
 
export default BurgerIngredient;

