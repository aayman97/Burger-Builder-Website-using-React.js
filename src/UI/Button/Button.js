import React ,{Component}from 'react';
import classes from './Button.module.css'



class Button extends Component {
   

    render() { 
        switch(this.props.type){
            case('Danger'):
                return (
                    <button className ={[classes.Button,classes.Danger].join(' ')} onClick = {this.props.cancel}>{this.props.children}</button>
                    )
             case('Success'):    
              
                   return( <button className ={[classes.Button,classes.Success].join(' ')}  onClick = {this.props.continue}>{this.props.children}</button>)
             
            case('Close'):
                return( <button className ={classes.Close} onClick = {this.props.close}>{this.props.children}</button>)
        }   
    }
}
 
export default Button;
