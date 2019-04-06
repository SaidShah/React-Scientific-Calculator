import React, { Component } from 'react';

class Functions extends Component {

  render() {
    return (
      <div className="each-function" onClick={()=>this.props.functionClick(this.props.func)}>
        <h2 className="special-button-name">{this.props.func}</h2>
      </div>
    );
  }

}

export default Functions;
