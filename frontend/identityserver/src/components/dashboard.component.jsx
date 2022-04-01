import React, { Component } from 'react';
import Sidebar from "../elements/sidebar";
import UserList from "../elements/userList";
import Navbar from './navbar';

import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

class Dashboard extends Component {
    state = {  }
    constructor(props)
    {
        super(props);
        this.state={
            admin:true
        }
    }
    render() { 
        return (

        <div >
            <Navbar/>
            <div className='row'>
                <div className='col-md-4'>
               <Sidebar ></Sidebar>
               </div>
            </div>
               <div>
                    
                <Router>

                <Switch>
                <Route exact path='/users' component={UserList} >


                </Route>
                </Switch>


                </Router>

                </div>
               
        </div>
               
            
                
  
            
          
           
             
           
            
          
          
       
         
             
              
          
  
  
  );
  
        }
    }


 
export default Dashboard;