import axios from 'axios';
import React, { Component } from 'react';

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      urls: [],
    };
    this.renderItems();
  }

  async slugRedirection(slugId) {
    const response = await axios.get(
      'http://localhost:4000/shortLinks/' + slugId
    );

    return response;
  }

  renderItems() {
    let items = [];
    let links = [];
    axios
      .get('http://localhost:4000/shortlinks')
      .then((res) => {
        res.data.allShortLinks.forEach(async (element) => {
          items.push(element.slug);
          links.push(await(this.slugRedirection(element.slug)))
        });
      })
      .then(() => {
        this.setState({ data: items });
        console.log(links)
        this.setState({ urls: links });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Short Links</h1>
        {this.state.data.map((val) => {
          return <h1><a>{val}</a></h1>;
        })}
      </React.Fragment>
    );
  }
}
