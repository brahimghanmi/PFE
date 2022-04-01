import React, { Component } from 'react';
class Sidebar extends Component {
    state = {  } 
    constructor(props){
        super(props);
        this.state={
            admin:true
        }
    }
    render() { 
        return (
            <div>
      <aside className="main-sidebar sidebar-dark-primary  mt-5">
    {/* Brand Logo */}
    
    {/* Sidebar */}
    <div className="sidebar ">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">

        <div className="info">
          <a href="#cd" className="d-block">Brahim GHANMI</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="#cd" className="nav-link active">
              <i className="nav-icon fas fa-users" />
              <p>
                Users management
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active">
                  <i className="fas fa-industry nav-icon" />
                  <p>Company 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="fas fa-industry nav-icon" />
                  <p>Company 2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="fas fa-industry nav-icon" />
                  <p>Company 3</p>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item has-treeview menu-open">
            <a href="#cd" className="nav-link active">
              <i className="nav-icon fas fa-user" />
              <p>
                  Ressources management
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active">
                  <i className="fas fa-industry nav-icon" />
                  <p>Company 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="fas fa-industry nav-icon" />
                  <p>Company 2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="fas fa-industry nav-icon" />
                  <p>Company 3</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>

        
          
         

          
          <li className="nav-item has-treeview">
            <a href="#cd" className="nav-link">
              <i className="nav-icon far fa-envelope" />
              <p>
                Mailbox
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inbox</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Compose</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>
          
          <li className="nav-item has-treeview">
            <a href="#cd" className="nav-link">
              <i className="nav-icon far fa-plus-square" />
              <p>
                Extras
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/login.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Login</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/register.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Register</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/forgot-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Forgot Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/recover-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Recover Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/lockscreen.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Lockscreen</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Legacy User Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/language-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Language Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/404.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 404</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/500.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 500</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/pace.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Pace</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/blank.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Blank Page</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="starter.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Starter Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="https://adminlte.io/docs/3.0" className="nav-link">
              <i className="nav-icon fas fa-file" />
              <p>Documentation</p>
            </a>
          </li>
         </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>

 </div>


        );
    }
}
 
export default Sidebar ;