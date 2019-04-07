/* eslint no-eval: 0 */

function doTheMath(givenItems){
  if(givenItems.length === 2){
    document.getElementById("calcScreen").value+="\n Equation is Invalid\n"
  }
  let eqArray=givenItems.split("\n")
  let index = eqArray.length-1
  let givenItem = eqArray[index]
 if(checkParens(givenItem)=== -1){
    document.getElementById("calcScreen").value+="\n Equation is Invalid\n"
 }else{

   if((givenItem.indexOf("(")>=0)  && (givenItem.indexOf(")")>=1) ){
     let newExp = givenItem.slice(0,givenItem.indexOf("("))+"*"+givenItem.slice(givenItem.indexOf("("),givenItem.length)
     let newExp2 = newExp.slice(0,newExp.indexOf(")")+1)+"*"+newExp.slice(newExp.indexOf(")")+1,newExp.length)
     if(newExp2.charAt(0)==="*"){
       newExp2 = newExp2.replace("*","")
     }if(newExp2.charAt(newExp2.length-1) === "*"){
       newExp2 = newExp2.slice(0,-1)
     }
     try{
     let answer = eval(newExp2)
     document.getElementById("calcScreen").value+="\n"
     document.getElementById("calcScreen").value+=answer
     document.getElementById("calcScreen").value+="\n"
   }catch(err){
     document.getElementById("calcScreen").value+="\n Equation is Invalid\n"
   }
   }else{
     try{
     let answer = eval(givenItem)
     document.getElementById("calcScreen").value+="\n"
     document.getElementById("calcScreen").value+=answer
     document.getElementById("calcScreen").value+="\n"
   }
   catch(err){
     document.getElementById("calcScreen").value+="\n Equation is Invalid\n"
   }
   }

 }

}

function checkParens(givenItem){
  let leftParen = givenItem.indexOf("(")
  let rightParen = givenItem.indexOf(")")
  if((leftParen === -1 && rightParen >=0) || (rightParen === -1 && leftParen >=0)){
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
