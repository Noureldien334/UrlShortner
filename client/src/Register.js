import React, { Component } from 'react';
import axios from 'axios';

export class Register extends Component{
    constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange = (e) => {
    e.preventDefault();
    const {username, password, firstName, lastName} = this.state;
    const body = {
        username,
        password,
        firstName,
        lastName
    };
    console.log(body)
    
    axios
      .post('http://localhost:4000/users/signup', body)
      .then(() => console.log('SignedUp IN SUCESS'));
  };


  render() {
    return (
      <form onSubmit={this.handleChange}>
        <div class="conatiner">
          <label for="username">
            <b>Username</b>
          </label>
        
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={this.onChange}
            required
          ></input>
          <br></br>
          <label for="password">
            <b>Password</b>
          </label>
        
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={this.onChange}
            required
          ></input>
          <br></br>

          <label for="Firstname">
            <b>FirstName</b>
          </label>
          <input
            type="text"
            placeholder="Enter Firstname"
            name="firstName"
            onChange={this.onChange}
            required
          ></input>
          
          <br></br>
          <label for="lastName">
            <b>Lastname</b>
          </label>

          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            onChange={this.onChange}
            required
          ></input>
          <button type="submit">Register</button>

        </div>
      </form>
    );
  }
}
