//Sum of Range JavaScript
var testArray=[400, 42, 311, 5, 9, 10, 28, 7, 6];

var sum=0;
for(var arrayPosition=0; arrayPosition < testArray.length; arrayPosition++){
  sum += testArray[arrayPosition];
}
console.log("The sum of "+testArray+" is: "+sum);

function findMax(inputArray){
  var max=inputArray[0];
  for(var arrayPosition=0; arrayPosition<inputArray.length; arrayPosition++){
    if(inputArray[arrayPosition]==max){
    }
    else if(inputArray[arrayPosition] > max){
      max=inputArray[arrayPosition];
    }
  }
  console.log("The maximum number in the array is "+max);
}
findMax(testArray);
