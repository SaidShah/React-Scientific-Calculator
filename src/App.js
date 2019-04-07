import React, { Component } from 'react';
import Screen from './components/Screen'
import SpecialButton from './components/SpecialButton'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import {doTheMath} from './doMath.js'
import './App.css';

let firstKeyArr = ["on","off"]
let secondKeyArr = ["(",")","x","y","( - )","clear"]
let numbersArr = ["1","2","3","4","5","6","7","8","9","0",".","="]
let functionsArr = ["+","/","*","-","del"]

class App extends Component {

  state={
    numbers: '',
    givenFunction: ''
  }

  addSpecialButtons=()=>{
    let firstSpKeys = firstKeyArr.map(eachKey=>{
      return <SpecialButton func={eachKey} key={eachKey} secondKeysClick={this.secondKeysClick}/>
    })
    return firstSpKeys
  }

  addSecondSpecialKeys=()=>{
    let secondSpKeys = secondKeyArr.map(eachKey=>{
      return <SpecialButton func={eachKey} key={eachKey} secondKeysClick={this.secondKeysClick}/>
    })
    return secondSpKeys
  }

  secondKeysClick=(givenItem)=>{
    if(givenItem==="clear"){
      document.getElementById("calcScreen").value=""
    }else if(givenItem === "( - )"){
      document.getElementById("calcScreen").value+="-"
    }else if(givenItem === "off"){
        document.getElementById("calcScreen").value="Turning off"
        setTimeout(()=>{
          document.getElementById("calcScreen").value+="."
        },200)
        setTimeout(()=>{
          document.getElementById("calcScreen").value+="."
        },400)
        setTimeout(()=>{
          document.getElementById("calcScreen").value+="."
        },600)
        setTimeout(()=>{
          document.getElementById("calcScreen").value+="."
        },800)
        setTimeout(()=>{
          document.getElementById("calcScreen").value+="."
        },1000)
        setTimeout(()=>{
          document.getElementById("calcScreen").value=""
        },1200)
    }else if(givenItem === "on"){
      document.getElementById("calcScreen").value="Turning on"
      setTimeout(()=>{
        document.getElementById("calcScreen").value+="."
      },200)
      setTimeout(()=>{
        document.getElementById("calcScreen").value+="."
      },400)
      setTimeout(()=>{
        document.getElementById("calcScreen").value+="."
      },600)
      setTimeout(()=>{
        document.getElementById("calcScreen").value+="."
      },800)
      setTimeout(()=>{
        document.getElementById("calcScreen").value+="."
      },1000)
      setTimeout(()=>{
        document.getElementById("calcScreen").value="enter equation \n"
      },1200)
    }else{
      document.getElementById("calcScreen").value+=givenItem
    }
  }

  handleEquals=(givenValue)=>{
    doTheMath(givenValue)
  }

  addFunctions=()=>{
    let secondSpKeys = functionsArr.map(eachKey=>{
      return <Functions func={eachKey} key={eachKey} functionClick={this.functionClick}/>
    })
    return secondSpKeys
  }

  functionClick=(givenFunc)=>{
    if(givenFunc === "del" && document.getElementById("calcScreen").value.length > 0){
      let currentValue = document.getElementById("calcScreen").value.slice(0,-1)
      document.getElementById("calcScreen").value=currentValue

    }else if(givenFunc !== "del"){
      document.getElementById("calcScreen").value+=givenFunc

    }
  }

  addNumbers=()=>{
    let funcs = numbersArr.map(eachKey=>{
      return <Numbers func={eachKey} key={eachKey} numberClick={this.numberClick}/>
    })
    return funcs
  }

  numberClick=(givenNum)=>{
    if(givenNum === "="){
      let wholeValue = document.getElementById("calcScreen").value
      this.handleEquals(wholeValue)
    }else{

      document.getElementById("calcScreen").value+=givenNum
    }
  }


  render() {

    return (
      <div className="outerbody">
        <div className="calculatorBody">

          <Screen/>

          <div className="special-button-container special-btn-cont-margin-top">
          {this.addSpecialButtons()}
          </div>
          <div className="special-button-container second-special-btn-cont-margin-top second-mobile-special">
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
