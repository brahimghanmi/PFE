import React, { Component } from 'react';
class Navbar extends Component {
  
    state = {  }
    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-lg   py-3 shadow-sm fixed-top">
  <a href="http://localhost:3000/" className="navbar-brand font-weight-bold mr-auto" >Talan IDP</a>
  <div id="navbarContent" className="collapse navbar-collapse order-sm-12 order-lg-1">
    <ul className="navbar-nav ml-auto">
      {/* Megamenu*/}
      
      <li className="nav-item"><a href="/sign-up" className="nav-link font-weight-bold text-uppercase">Signup</a></li>
      
      <li className="nav-item"><a href="/a" className="nav-link font-weight-bold text-uppercase">Contact</a></li>
    </ul>
  </div>  
  <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler order-md-1">
    <span className="navbar-toggler-icon" />
  </button>
</nav>
            </div>
          );
    }
}
 
export default Navbar;
<div>
    <nav className="navbar navbar-expand-lg   py-3 shadow-sm fixed-top">
  <a href="http://localhost:3000/" className="navbar-brand font-weight-bold mr-auto" >Talan IDP</a>
  <div id="navbarContent" className="collapse navbar-collapse order-sm-12 order-lg-1">
    <ul className="navbar-nav ml-auto">
      {/* Megamenu*/}
      
      <li className="nav-item"><a href="/sign-up" className="nav-link font-weight-bold text-uppercase">Signup</a></li>
      
      <li className="nav-item"><a href="/a" className="nav-link font-weight-bold text-uppercase">Contact</a></li>
    </ul>
  </div>  
  <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler order-md-1">
    <span className="navbar-toggler-icon" />
  </button>
</nav>
</div>