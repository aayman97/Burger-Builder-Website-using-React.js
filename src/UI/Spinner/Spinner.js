import React ,{Component}from 'react';
import classes from './Spinner.module.css';

class Spinner extends Component {

    render() { 
        return ( <div className={classes.loader}>Loading...</div> );
    }
}
 
export default Spinner;
