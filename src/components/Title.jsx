import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <h2>{this.props.headline}</h2>
    );
  }
}
