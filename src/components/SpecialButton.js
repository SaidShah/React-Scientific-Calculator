import React, { Component } from 'react';

class SpecialButton extends Component {

  render() {

    return (

      <div className="special-button" onClick={()=>this.props.secondKeysClick(this.props.func)}>
        <h4 className="special-button-name">{this.props.func}</h4>
      </div>

    );
  }

}

export default SpecialButton;
