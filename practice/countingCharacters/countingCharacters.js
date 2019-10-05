/*JavaScript for the counting characters Practice */

function countingCharacters(stringToCount){
  console.log(stringToCount+" has "+stringToCount.length+" characters.");
}

function countingCharacters2(stringToCount, character){
  var characterCount=0;
  for (var position =0; position<stringToCount.length; position++){
    if(stringToCount[position]==character){
      characterCount++;
    }
  }
  console.log("String to search in: "+stringToCount);
  console.log("Character to find: "+character);
  console.log("Number of times this character appears: "+characterCount);
}

function countingCharacters3(str, search){
  var count=0;
  var numChars=search.length;
  var lastIndex=str.length-numChars;
  for(var index=0; index <= lastIndex; index++){
    var current = str.substring(index, index+numChars);
    if(current == search){
      count++;
    }
  }
  return count;
}
