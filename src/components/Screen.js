import React, { Component } from 'react';

class Screen extends Component {

  render() {
    return (
      <div className="whole-screen">
        <textarea id="calcScreen" className="screen-for-calc" readOnly={true}/>

      </div>
    );
  }

}

export default Screen;
