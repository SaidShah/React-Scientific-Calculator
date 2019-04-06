import React, { Component } from 'react';

class Numbers extends Component {

  render() {
    return (
      <div className="each-number">
      <h1 className="number-button-txt">{this.props.func}</h1>
      </div>
    );
  }

}

export default Numbers;
