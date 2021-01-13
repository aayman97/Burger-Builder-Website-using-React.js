import React, { Component } from 'react';
import Layout from './Component/Layout/Layout';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilderLayout'


class App extends Component {
  state = { 
    show : true
   }

  render() { 
    return (  <Layout> 
                 { this.state.show ? <BurgerBuilder></BurgerBuilder> : null}
              </Layout> 
              );
  }
}
 
export default App; 
