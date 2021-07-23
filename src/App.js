import React from "react";
import Index from "./components/Home";
import {BrowserRouter as Router,  Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Login from "./components/Authentication/Login";
import Register from './components/Authentication/Register/index'


function App() {
  return (
    <div className="App">
       <Router>
       <ToastContainer />
    
      <Switch>
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
       

        <Redirect to="/" />
      </Switch>
     
      </Router>
     

      
    </div>
  );
}

export default App;
