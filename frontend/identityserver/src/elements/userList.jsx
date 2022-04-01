import React, { Component } from 'react';
import { DataGrid } from "@material-ui/data-grid";


import { Delete,EditOutlined } from "@material-ui/icons";
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';



import Sidebar from './sidebar';
import './userList.css';
import Navbar from "../components/navbar";

class UserList extends Component {
    state = {  }
    constructor(props){
        super(props);
        
        this.state={
            users:[],
            id:"",
            userName:"",
            email:"",
            phoneNumber:"",
            emailConfirmed:true,
            lockoutEnabled:true,
            phoneNumberConfirmed:true,
            twoFactorEnabled:true,
            lockoutEnd:"0",
            accessFailedCount:"",
            columns:[
                
               
                { field: "email", headerName: "Email", width: 170 },
                { field: "userName", headerName: "User name", width: 150 },
                { field: "phoneNumber", headerName: "Phone number", width: 180 },
                {field:"action",headerName:"Actions",width:190, renderCell: (params) => {
                    return (
                      <>
                      
                        <ListAltTwoToneIcon title="details" className="details" data-toggle="modal" data-target=".bd-example-modal-xl" onClick={()=>{this.setState({id:params.row.id});
                        this.setState({userName:params.row.userName});
                        this.setState({email:params.row.email});
                        this.setState({phoneNumber:params.row.phoneNumber});
                        this.setState({emailConfirmed:params.row.emailConfirmed});
                        this.setState({lockoutEnabled:params.row.lockoutEnabled});
                        this.setState({phoneNumberConfirmed:params.row.phoneNumberConfirmed});
                        this.setState({twoFactorEnabled:params.row.twoFactorEnabled});
                        this.setState({lockoutEnd:params.row.lockoutEnd});
                        this.setState({accessFailedCount:params.row.accessFailedCount});
                     }}></ListAltTwoToneIcon>
                        
                          <EditOutlined  className="userListEdit" data-toggle="modal" data-target="#updateUser"  onClick={()=>{this.setState({id:params.row.id});
                        this.setState({userName:params.row.userName});
                        this.setState({email:params.row.email});
                        this.setState({phoneNumber:params.row.phoneNumber});
                     }}>

                     </EditOutlined>
                         
                        
                        
                        <Delete
                          className="userListDelete"data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>{this.setState({id:params.row.id});
                        this.setState({userName:params.row.userName});
                     }}
                          
                        />
                      </>
                    );}
                }
                
               
                
            ]
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);

    } 

    // refreshList () {
     
    //     fetch ("https://localhost:5001/api/usermanagement/users", {
    //          method:'GET',
    //          headers:{'Content-type':'application/json'}})
    //          .then(response=>response.json())
    //          .then(data=>this.setState({users:data}));
            
            
    //         } 

  async componentDidMount(){
    await fetch ("https://localhost:5001/api/usermanagement/users", {
        method:'GET',
        headers:{'Content-type':'application/json'}})
        .then(response=>response.json())
        .then(data=>this.setState({users:data}));
        console.log(this.state.users); 
    } 
   async componentDidUpdate(){
   console.log('updated');

    }
    deleteUser(userid){
        fetch ("https://localhost:5001/api/usermanagement/delete", {
             method:'POST',
             headers:{'Content-type':'application/json'},
             body: JSON.stringify({
             id:userid
          }),
          
      })
      .then((response) => response.json())
      .then((result) => {
        
        window.location.reload(false);

      });

    }
    updateUser=(e)=>{
        e.preventDefault();
        fetch ("https://localhost:5001/api/usermanagement/update", {
             method:'PATCH',
             headers:{'Content-type':'application/json'},
             body: JSON.stringify({
             id:this.state.id,
             username:this.state.userName,
             email:this.state.email,
             
             phonenumber:this.state.phoneNumber


          }),
          
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
         window.location.reload(false);

      });

    }
     
    render() { 
        return (
           
           
              <div>
                  <Navbar/>
                 
                    <Sidebar></Sidebar>
                    
                    <div className='row d-flex justify-content-end'>
                       <div className='col-md-10 ml-2 mt-4'>
                           <div className='row justify-content-start'>
                           <h1 className='mt-4'>Users List</h1>
                           </div>
                      
                       <DataGrid className='custom ml-5 '
                               autoHeight={true}
                               
                                
                                rows={this.state.users}
                                disableSelectionOnClick
                                columns={this.state.columns}
                                pageSize={10}
                                checkboxSelection
                            />

                       </div>
                            

                        <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Delete User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure to delete {this.state.userName} ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger" onClick={()=>this.deleteUser(this.state.id)} >Yes Delete</button>
                            </div>
                            </div>
                        </div>
                        </div>



                        <div className="modal fade" id="updateUser"  role="dialog" aria-labelledby="updateUser" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">User Name:</label>
                                    <input type="text" className="form-control" id="recipient-name"  defaultValue={this.state.userName}onChange={e=>this.setState({userName:e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Email</label>
                                    <input className="form-control" id="message-text" defaultValue={this.state.email} onChange={e=>this.setState({email:e.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Phone number</label>
                                    <input className="form-control" id="message-text" defaultValue={this.state.phoneNumber} onChange={e=>this.setState({phoneNumber:e.target.value})} />
                                </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.updateUser}>Save chnages</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="modal fade bd-example-modal-xl"  role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">User Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <label htmlFor="recipient-name" className="col-form-label">User Name: {this.state.userName}</label>
                                      
                                        </div>
                                       <div className="col-md-4">
                                       <label htmlFor="message-text" className="col-form-label">Email: {this.state.email}</label>
                                       </div>
                                       <div className='col-md-4'>
                                       <label htmlFor="message-text" className="col-form-label">Phone number: {this.state.phoneNumber}</label>
                                       </div>
                                          
                                        
                                   
                                    </div>
                                   
                                    
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <label htmlFor="recipient-name" className="col-form-label">Access Failed Count: {this.state.accessFailedCount}</label>
                                      
                                        </div>
                                       <div className="col-md-4">
                                       <label htmlFor="message-text" className="col-form-label">Email Confirmed: {this.state.emailConfirmed.toString()}</label>
                                       </div>
                                       <div className='col-md-4'>
                                       <label htmlFor="message-text" className="col-form-label">Lockout Enabled: {this.state.lockoutEnabled.toString()}</label>
                                       </div>
                                          
                                        
                                   
                                    </div>
                                   
                                    
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <label htmlFor="recipient-name" className="col-form-label">Lokout End: {this.state.lockoutEnd}</label>
                                      
                                        </div>
                                       <div className="col-md-4">
                                       <label htmlFor="message-text" className="col-form-label">Phone number confirmed: {this.state.phoneNumberConfirmed.toString()}</label>
                                       </div>
                                       <div className='col-md-4'>
                                       <label htmlFor="message-text" className="col-form-label">Two Factor Enabled: {this.state.twoFactorEnabled.toString()}</label>
                                       </div>
                                          
                                        
                                   
                                    </div>
                                   
                                    
                                </div>
                                    
                                   
                                
                                
                                    
                                   
                                
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                               
                            </div>
                            </div>
                        </div>
</div>
             
                    </div>
                
                        

                    
                  
                
                </div>
         
        
           
       
        );
    }
}
 
export default UserList;