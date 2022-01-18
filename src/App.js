import React, { Component } from 'react';
import './App.css';

class App extends Component {
      
    constructor(){
        super();
        
        this.state={
            name:"",
            number:"",
            phoneBook:[
                {name: "", number: ""},
                {name: "", number: ""}
                ],
            showForm:false
           }
        
        this.handleInputChange1=(event)=>{
            this.setState({
                name:event.target.value
            })
        }
        
        this.handleInputChange2=(event)=>{
            this.setState({
                number:event.target.value
            })
        }
        
        this.addContact=()=>{
            
            const newContact={
                name:this.state.name,
                number:this.state.number         
            }
            
            if(this.state.name==="" || this.state.number==="")
            {
                alert('Both fields are required.');
                return;
            }
                 
            this.setState( (prevState)=>({
                phoneBook:prevState.phoneBook.concat(newContact),
                 name:"",
                number:""
            })) 
                       
        }
        
        this.toggleShowForm=()=>{ 
            this.setState(
                { showForm: !this.state.showForm}
            )
        }                             
    }

  render() {
      
      let form=null;
      if(this.state.showForm)
      {
          form=
             (  
              <div className="container">
              <form className="form">
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange1} value={this.state.name} placeHolder="Enter Name" />
              </div>
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange2} value={this.state.number} placeHolder="Enter phone number"/>
              </div>
              <button type="button" className="btn btn-primary" onClick={this.addContact}>Add</button>
            </form>
              </div>
          )
      }
           
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-4"></div>
        
        
        <div className="col-md-4">
        <div className="App">
        <h2 className="header">Agenda Telefonica</h2>
        <button style={{cursor:"pointer",color:"blue"}} onClick={this.toggleShowForm}>Create New Contact</button>
            
        {form}
        
        {this.state.phoneBook.map(contact =>
           <div className="contacts">
           <h3>{contact.name}</h3>
           <p>{contact.number}</p>
           <hr/>
          </div>
        )} 
        </div>
        </div>
        
        
     <div className="col-md-4"></div>
     </div>
     </div>
    );
  }
}

export default App;
