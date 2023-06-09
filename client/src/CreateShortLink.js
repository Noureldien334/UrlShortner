import axios from 'axios';
import React, { Component } from 'react';

export class CreateShortLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: '',
      ios: {
        primary: '',
        fallback: '',
      },

      android: {
        primary: '',
        fallback: '',
      },

      web: {
        primary: '',
      },
    };
  }

  slugOnChange = (e) => {
    console.log(e)
    this.setState({[e.target.name]: e.target.value})
  };

  webOnChange = (e) => {
    const web = { ...this.state.web };
    web[e.target.name] = e.target.value;
    this.setState({web});
  };
  
  iosOnChange = (e) => {
    const ios = { ...this.state.ios };
    ios[e.target.name] = e.target.value;
    this.setState({ ios });
  };

  androidOnChange = (e) => {
    const android = { ...this.state.android };
    android[e.target.name] = e.target.value;
    this.setState({ android });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { slug, ios, android, web } = this.state;

    const body = {
      slug,
      ios,
      android,
      web,
    };

    axios
      .post('http://localhost:4000/shortlinks', body)
      .then(() => console.log('Created SHortLink'));
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="container">
          <label for="slug">
            <b>Slug</b>
          </label>
          <input
            type="text"
            placeholder="Enter Slug (Optional)"
            name="slug"
            onChange={this.slugOnChange}
          ></input>
          <br></br>

          <label for="web">
            <b>Web</b>
          </label>
          <input
            type="text"
            placeholder="Primary"
            name="primary"
            required
            onChange={this.webOnChange}
          ></input>

          <br></br>
          <label for="Ios">
            <b>Ios</b>
          </label>

          <input
            type="text"
            placeholder="Primary"
            name="primary"
            onChange={this.iosOnChange}
          ></input>

          <label for="Ios"></label>
          <input
            type="text"
            placeholder="Fallback"
            name="fallback"
            onChange={this.iosOnChange}
          ></input>
          <br></br>

          <label for="Android">
            <b>Android</b>
          </label>
          <input
            type="text"
            placeholder="Primary"
            name="primary"
            onChange={this.androidOnChange}
          ></input>

          <input
            type="text"
            placeholder="Fallback"
            name="fallback"
            onChange={this.androidOnChange}
          ></input>
          <button type="submit">Create</button>
        </div>
      </form>
    );
  };
}
