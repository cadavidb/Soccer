import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { About } from '../components/info/About';


import { NavBar } from '../components/NavBar';
import { Types } from '../components/Types';

  
export const AppRouter = () => {
    return (
       
            <Router>
        <div>

            <NavBar/>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/sports" component={Types}/>
                
              
               
                
                <Redirect to="/sports"/>

                
            </Switch>
        </div>
            </Router>
            
    )
}
