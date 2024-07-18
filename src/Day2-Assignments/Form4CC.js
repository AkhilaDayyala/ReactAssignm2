import React, { Component } from 'react';

export default class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', this.state);
  };

  render() {
    return (
      <>
      <h5 style={{color:'blue'}}>Registration Form by using CC</h5>
      <form onSubmit={this.handleSubmit}>
    
        

        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput"   value={this.state.name}
            onChange={this.handleChange}>Enter your Name</label>
</div>
<div class="form-floating">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword"    value={this.state.email}
            onChange={this.handleChange}> Enter Valid EMail</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword"  value={this.state.password}
            onChange={this.handleChange}>Enter  Password</label>
</div>
<br></br>
<button type="submit" class="btn btn-success" style={{width:'400px'}}>Register</button>


      </form>
      </>
    );
  }
}


