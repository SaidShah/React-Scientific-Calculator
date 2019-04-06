function doTheMath(givenItem){
 if(checkParens(givenItem)=== -1){
    document.getElementById("calcScreen").value+="\n Equation is Invalid"
 }else{

 }

}

function checkParens(givenItem){
  let leftParen = givenItem.indexOf("(")
  let rightParen = givenItem.indexOf(")")
  if((leftParen === -1 && rightParen >0) || (rightParen === -1 && leftParen >0)){
    return -1
  }else {
    let counter = 0
    let splitArr = givenItem.split("")
    for(let i = 0 ; i< splitArr.length;i++){
      if(splitArr[i]==="("){
        counter++
      }else if(splitArr[i]===")"){
        counter--
      }

      if(counter === -1){
        return -1
      }
    }
    if(counter < 0){
      return -1
    }
  }
  return 1
}

export {doTheMath}
