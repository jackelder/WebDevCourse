//JavaScript for the displayEvens program.

function clearErrors(){
for (var loopCounter = 0;
        loopCounter < document.forms["evensForm"].elements.length;
        loopCounter++) {
        if (document.forms["evensForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["evensForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm(){
  clearErrors();
  document.forms["evensForm"]["startNum"].value="";
  document.forms["evensForm"]["endNum"].value="";
  document.forms["evensForm"]["stepNum"].value="";
  document.getElementById("numbersHeading").innerText="";
  document.getElementById("numbersDisplay").innerText="";
  document.forms["evensForm"]["startNum"].focus();
}

function validateItems(){
  clearErrors();
  var startNum = Number(document.forms["evensForm"]["startNum"].value);
  var endNum = Number(document.forms["evensForm"]["endNum"].value);
  var stepNum = Number(document.forms["evensForm"]["stepNum"].value);
  var outputNumbers = [];

  if(startNum == "" || isNaN(startNum)){
    alert("Starting number field must be filled in with a number.");
    document.forms["evensForm"]["startNum"].parentElement.className=
    "form-group has-error";
    document.forms["evensForm"]["startNum"].focus();
    return false;
  }
  if(endNum=="" || isNaN(endNum) || endNum <= startNum){
    alert("Ending number field must be filled in with a number greater than or equal to the starting number.");
    document.forms["evensForm"]["endNum"].parentElement.className=
    "form-group has-error";
    document.forms["evensForm"]["endNum"].focus();
    return false;
  }
  if(stepNum=="" || isNaN(stepNum) || stepNum <= 0){
    alert("Step size field must be filled in with a positive integer.");
    document.forms["evensForm"]["stepNum"].parentElement.className=
    "form-group has-error";
    document.forms["evensForm"]["endNum"].focus();
    return false;
  }
  for(var i=startNum; i<=endNum; i+=stepNum){
    if(i%2 == 0){
      outputNumbers.push(i);
    }
  }
  document.getElementById("numbersHeading").innerText=
  "Here are the even numbers between "+startNum+" and "+endNum+" by steps of "+stepNum+".";
  document.getElementById("numbersDisplay").innerText=outputNumbers;
  return false;
}
