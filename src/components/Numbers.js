import React, { Component } from 'react';

class Numbers extends Component {

  numberClick=(e,givenNum)=>{
    this.props.numberClick(givenNum)
  }

  render() {

    return (
      <div className="each-number" onClick={(e)=>this.numberClick(e,this.props.func)}>
      <h1 className="number-button-txt">{this.props.func}</h1>
      </div>
    );
  }

}

export default Numbers;
