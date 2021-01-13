import React, { Component } from 'react';
import Aux from '../../HOC/auxillary'
import Burger from '../../Component/Burger/Burger'
import BuildControls from '../../Component/BuildControls/BuildControls'
import BuildControl from '../../Component/BuildControls/BuildControl/BuildControl'
import classes from './Align-Center.module.css'
import ReactDOM from 'react-dom';
import OrderSummary from '../../Component/OrderSummary/OrderSummary'
import Modal from '../../UI/Modal/Modal'
import Spinner from '../../../src/UI/Spinner/Spinner'
import errorHandler from '../../HOC/withErrorHandler'
import axios from 'axios';


const INGREDIENT_PRICE = [
    {type : 'cheese' , price : 2},
    {type : 'meat' , price : 5},
    {type : 'salad' , price : 1},
    {type : 'bacon' , price : 3}
]



class BurgerBuilder extends Component {
    state = { 
        ingredients : null,
        totalPrice : 4,
        minPrice : 4,
        totalamount : 0,
        purchased: false,
        orderSummary : false,
        disableAllButtons : false,
        loading : false,
        error : null
     }

     constructor(){
       super()
        axios.get('https://react-burger-app-b9d9b.firebaseio.com/ingredients.json')
            .then(res => {
                console.log(res.data)
                this.setState({ingredients : 
                    res.data
                })
            }).catch(err => {this.setState({error : err})})
       

     }
        
     AddIngredientHandler = (type) =>{
    
        const oldIngredients = {...this.state.ingredients}
        let totalamount = this.state.totalamount
        oldIngredients[type] = oldIngredients[type] + 1
        totalamount++
        let oldPrice = this.state.totalPrice
        INGREDIENT_PRICE.map(ing => {
            if(ing.type === type){
                oldPrice = oldPrice + ing.price
            }
        })
        
        this.setState({ingredients : oldIngredients ,totalPrice : oldPrice , totalamount : totalamount , purchased : true})


     }
     DeleteIngredientHandler = (type) =>{
        
        let totalPriceTemp = this.state.totalPrice;
        let totalamount = this.state.totalamount
        let purchased = this.state.purchased
        if(totalPriceTemp > this.state.minPrice){
            const oldIngredients = {...this.state.ingredients}
            if(oldIngredients[type] > 0){
                oldIngredients[type] = oldIngredients[type]-1
                totalamount--
                let oldPrice = this.state.totalPrice
                INGREDIENT_PRICE.map(ing => {
                    if(ing.type === type){
                        oldPrice = oldPrice - ing.price
                    }
                })
                if(totalamount > 0){

                    purchased = true
                }
                else{
                    purchased = false
                }
                this.setState({ingredients : oldIngredients ,totalPrice : oldPrice , totalamount : totalamount , purchased : purchased })
            }
        }
        
        
        
     }
     OrderNowHandler = () =>{


        this.setState({orderSummary : true , disableAllButtons : true})
       
        
    


     }
     CancelPurchaseHandler = () =>{
        this.setState({orderSummary : false , disableAllButtons : false})
     }
     continuePurchaseHandler = () =>{
       
        this.setState({loading : true})
        const order = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                name : 'Hazem',
                address : ' Ma7lya el sadsa - building no. 55',
                city : 'cairo'
            },
            email : 'ahmedayman.ayman80@gmail.com'
        }
        axios.post('https://react-burger-app-b9d9b.firebaseio.com/orders',order)
        .then(response => this.setState({loading : false, orderSummary : false , disableAllButtons : false}))
        .catch(err => {
            this.setState({loading : false ,orderSummary : false
                , disableAllButtons : false })

    
    })

     }
     ClosePurchaseHandler = () =>{
        this.setState({orderSummary : false , disableAllButtons : false})
     }
    render() { 

        let e = ''
        if(this.state.error){
            e =  <p className = {classes.e}> Ingredients cannot be loaded </p>
        }
        let orderSummary =''
        let burger = <Spinner></Spinner>
        if(this.state.ingredients !== null){
            orderSummary =  <OrderSummary ingredients = {this.state.ingredients} ></OrderSummary>
            burger = <Aux>

                <div className ={classes.burger}> <Burger ingredients = {this.state.ingredients}> </Burger> </div>
                 <p className ={classes.align}> Total Price =  {this.state.totalPrice}</p>
              
              <BuildControls 
              added = {this.AddIngredientHandler} 
              deleted = {this.DeleteIngredientHandler}
              totalprice = {this.state.totalPrice}
              order = {this.OrderNowHandler}
              disable = {this.state.purchased}
              disableAllButtons = {this.state.disableAllButtons}
              >
              
              </BuildControls>
                </Aux>

        }

        
        if(this.state.loading){
            orderSummary = <Spinner></Spinner>
        }
        
        return ( <Aux>

            {<Modal 
            onShow = {this.state.orderSummary}
            continue = {this.continuePurchaseHandler}
            cancel = {this.CancelPurchaseHandler}
            // close = {this.ClosePurchaseHandler}
            >
               {orderSummary}
                          
        
            </Modal>}
                {e}
                {burger}
             
        </Aux> );
    }
}
 
export default errorHandler(BurgerBuilder,axios);