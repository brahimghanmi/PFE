import React, { Component } from 'react';
import Navbar from '../components/navbar';
class Login extends Component {
    state={

    }
      constructor(props){
        super(props);
        this.state= {
          email:"",
          password:""
          }
      }
   
     
    
  

    clickLogin = (e) => {
      e.preventDefault();
      fetch ("https://localhost:5001/api/account/login2", {
           method:'POST',
           headers:{'Content-type':'application/json'},
           
           body: JSON.stringify({
           email:this.state.email,
           password:this.state.password,
           returnurl:"https://localhost:5003/callback.html"
        }),
    })
    .then((response) => response.json())
    .then((result) => {
      
      console.log(result);
      if(result.message === "success"){
        alert('You are logged in.');
        window.location.href=result.returnurl;
      
       } 
       else 
       {
         
           alert('Please check your login information.');
           window.location.reload();
       }
      
    });
  }
    render() { 
        return (
           
	<div>
    <Navbar/>
  <div className="container-fluid px-1 mt-4 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 mt-2 border-0">
      <div className="row d-flex">
        <div className="col-lg-6">
          <div className="card1 pb-5">
            <div className="row"> 
            <div className="logo mt-1">
            <img src="images/logo-talan1.png"  alt="logo " /> 
            </div>
            
            </div>
            <div clasame="row px-3 justify-content-center mt-5 mb-2 border-line"> <img alt="illustration"src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card2 card border-0 mt-4 px-4 py-5">
           
            
            <div className="row px-3"> <label className="mb-1">
                <h6 className="mb-0 text-sm">Email</h6>
              </label> <input className="mb-4" type="email" name="email"  placeholder="Enter a valid email" required onChange={e=>this.setState({email:e.target.value})}/> </div>
            <div className="row px-3"> <label className="mb-1">
                <h6 className="mb-0 text-sm">Password</h6>
              </label> <input type="password" name="password" placeholder="Enter password" required onChange={e=>this.setState({password:e.target.value})}/> </div>
           
            <div className="row  mt-3 mb-3 px-3"> <button type="submit" className="btn btn-primary text-center" onClick={this.clickLogin}>Login</button> </div>
            <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a href="http://localhost:3000/sign-up" className="text-danger ">Register</a></small> </div>
          </div>
        </div>
      </div>
      <div className="bg-blue py-4">
        
      </div>
    </div>
  </div>
</div>

        );
    }
}
 
export default Login;
