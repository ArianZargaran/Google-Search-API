import React, { Component } from 'react';

export default class Boilerplate extends Component {
  renderList(){
    return this.props.result.map((result, idx) => {
      return (
        <li key={idx}>{result}</li>
      );
    });
  }
  
  render () {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}