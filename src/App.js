import React, { Component } from 'react';
import Screen from './components/Screen'
import SpecialButton from './components/SpecialButton'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import './App.css';

let firstKeyArr = ["sin","cos","tan","sqrt","pow","log","off"]
let secondKeyArr = ["(",")",",","x","y","( - )","clear"]
let numbersArr = [1,2,3,4,5,6,7,8,9,0,".","="]
let functionsArr = ["+","/","*","-"]

class App extends Component {

  addSpecialButtons=()=>{
    let firstSpKeys = firstKeyArr.map(eachKey=>{
      return <SpecialButton func={eachKey} key={eachKey}/>
    })
    return firstSpKeys
  }

  addSecondSpecialKeys=()=>{
    let secondSpKeys = secondKeyArr.map(eachKey=>{
      return <SpecialButton func={eachKey} key={eachKey}/>
    })
    return secondSpKeys
  }

  addFunctions=()=>{
    let secondSpKeys = functionsArr.map(eachKey=>{
      return <Functions func={eachKey} key={eachKey}/>
    })
    return secondSpKeys
  }

  addNumbers=()=>{
    let funcs = numbersArr.map(eachKey=>{
      return <Numbers func={eachKey} key={eachKey}/>
    })
    return funcs
  }


  render() {
    return (
      <div className="outerbody">
        <div className="calculatorBody">

          <Screen/>

          <div className="special-button-container special-btn-cont-margin-top">
          {this.addSpecialButtons()}
          </div>
          <div className="special-button-container">
          {this.addSecondSpecialKeys()}
          </div>

          <div className="functions-container">
            {this.addFunctions()}
          </div>

          <div className="numbers-container">
            {this.addNumbers()}
          </div>


        </div>

      </div>
    );
  }
}

export default App;
