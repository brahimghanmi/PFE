import React, { Component } from 'react';
import Navbar from "../components/navbar";
class Signup extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
            phone:""
        }

        
    }

    clickRegister = (e) => {
        e.preventDefault();
        fetch ("https://localhost:5001/api/usermanagement/create", {
             method:'POST',
             headers:{'Content-type':'application/json'},
             body: JSON.stringify({
             username:this.state.username,
             email:this.state.email,
             password:this.state.password,
             phonenumber:this.state.phone
          }),
          
      })
      .then((response) => response.json())
      .then((result) => {
        alert('You are registred');
        this.props.history.push("/login");

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
                    <div className="card2 card mt-4 border-0 px-4 py-5">
                    <div className="row px-3"> <label className="mb-1">
                          <h6 className="mb-0 text-sm">Name</h6>
                        </label> <input className="mb-4" type="text" name="name"  placeholder="Enter your full name" required onChange={e=>this.setState({username:e.target.value})}/> </div>
                     
                      
                      <div className="row px-3"> <label className="mb-1">
                          <h6 className="mb-0 text-sm">Email</h6>
                        </label> <input className="mb-4" type="email" name="email"  placeholder="Enter a valid email" required onChange={e=>this.setState({email:e.target.value})}/> </div>
                      <div className="row px-3"> <label className="mb-1">
                          <h6 className="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" placeholder="Enter password" required onChange={e=>this.setState({password:e.target.value})}/> </div>
                        <div className="row px-3 mt-4"> <label className="mb-1">
                          <h6 className="mb-0 text-sm ">Phone number</h6>
                        </label> <input type="text" name="password" placeholder="Enter your phone number" required onChange={e=>this.setState({phone:e.target.value})}/> </div>
                     
                      <div className="row  mt-3 mb-3 px-3"> <button type="submit" className="btn btn-primary text-center" onClick={this.clickRegister}>Register</button> </div>
                     
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
 
export default Signup;