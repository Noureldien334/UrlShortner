import axios from 'axios';
import React,{ Component } from 'react';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const body = {
      username,
      password,
    };

    axios
      .post('http://localhost:4000/users/login', body)
      .then(() => console.log('Logged IN SUCESS'));
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
            onChange={this.onChange}
          ></input>
          <br></br>
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={this.onChange}
          ></input>

          <button type="submit">Login</button>
        </div>
      </form>
    );
  };
}
