import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../UI/Modal/Modal'
import Aux from '../HOC/auxillary'
import ReactDOM from 'react-dom'

const errorHandler = (WrappedComponent,axios) =>{

return class error extends Component {
    state = { 
        err:null,
        appear : false
     }

  
     constructor(){
         super()
        this.reqInterceptors = axios.interceptors.request.use(req => {
            this.setState({error: null});
            return req;
        });
        this.resInterceptors = axios.interceptors.response.use( res => {
            return res
          },error => {
            console.log(" err response = ",error )
            this.setState({err : error , appear : true})
            // console.log("this.state.err = ", this.state.err.message)
            
            return Promise.reject(error)
          })

          console.log(" did mount" , this.reqInterceptors , this.resInterceptors)
     }
     
componentWillUnmount(){

    console.log(" will unmount" , this.reqInterceptors , this.resInterceptors)
    axios.interceptors.request.eject(this.reqInterceptors)
    axios.interceptors.response.eject(this.resInterceptors)


}


  
    render() { 
    

        return  ( 
            
            <Aux>
                
                <Modal 
                    onShow={this.state.appear}
                    disappearButton = {true}
                    close = {this.ClosePurchaseHandler}
                >
                {this.state.err ? this.state.err.message : null}
            </Modal>
               

            <WrappedComponent {...this.props} />
        </Aux>


           

         );
    }
}
 


}

export default errorHandler;