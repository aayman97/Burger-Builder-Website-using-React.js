import React, { Component } from 'react';
import Aux from '../../HOC/auxillary'
import classes from './Modal.module.css'
import Button from '../Button/Button'

class Modal extends Component{
 
  

  

    render(){
        let button1 = <Button type = 'Danger' cancel = {this.props.cancel}> CANCEL </Button>
        let button2 = <Button type = 'Success' continue = {this.props.continue}> CONTINUE </Button>
        // let button3 = <Button type = 'Close'  close = {this.props.close} > CLOSE </Button>
       
        if(this.props.disappearButton === true){
        button1 = <Button type = 'Close'  close = {this.props.close} > CLOSE </Button>
             button2  = ''
    
        }
       
       
        return(
            <div className = {classes.Modal}
    style = {{
        transform : this.props.onShow ? 'translateY(0)' : 'translateY(-100)',
        opacity : this.props.onShow ? '1' : '0'
    }}
     
     id = {this.props.id}
    >
         {this.props.children}
    {
        button1
    }
  {
      button2
  }  

    </div>
        )
    }
} 
export default Modal;



