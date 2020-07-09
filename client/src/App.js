import React, { Component } from 'react';
// import Hee from './logo.svg'
import {BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import pageNotFound from './components/404';
import AddComments from './components/addComment';
import formData from './components/formData';



class App extends Component {
render(){

    return (  
   
    <div>
      {/* <img src={Hee} alt="sd"/> */}
<Router>
  <Switch>
    
  <Route exact path="/" component={formData}/>
    <Route  path="/addcomment" component={AddComments}/>
    <Route  path="/formData" component={formData}/>
    <Route exact path="/404" component={pageNotFound}/>
    <Redirect  to="/404"/>
  </Switch>
</Router>

 </div>
 );
};
  }

 

export default App;
