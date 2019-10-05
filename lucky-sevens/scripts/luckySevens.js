/*
Name: Jack Elder
Date Created: April 15, 2019
Date Modified: April 15, 2019
JavaScript for playing and displaying the results of Lucky Sevens.
*/

// opening() provides an alert to the user with instructions.
function opening(){
  alert("Rules: if the sum of two rolled dice equals 7 then you \
win $4. Otherwise, you lose $1. Please input the total amount in dollars \
that you will bet.");
}

// clearErrors removes the has-error class name from the startingBet parent
// div if applicable.
function clearErrors(){
  if (document.forms["startForm"]["startingBet"].parentElement.className.indexOf("has-") != -1) {
      document.forms["startForm"]["startingBet"].parentElement.className = "form-group form-inline row";
  }
}

// resetForm() clears errors, hides the results table, and empties and focuses
// on the startingBet input box.
function resetForm(){
  clearErrors();
  document.forms["startForm"]["startingBet"].value="";
  document.getElementById("results").style.display = "none";
  document.forms["startForm"]["startingBet"].focus();
}

// rollDice() returns the sum of two six-sided dice rolls.
function rollDice(){
  var die1 = Math.floor(Math.random()*6+1);
  var die2 = Math.floor(Math.random()*6+1);
  return die1+die2;
}

// play() takes in the startingBet amount and plays consecutive games of
// Lucky Sevens until the user has no money remaining. An alert is presented
// if the user has submitted a startingBet that is less than or equal to
// zero, empty, or not a number. play() keeps track of the total rolls made
// before the user goes broke (totalRolls), the maximum money held by the
// user at any time (maxMoney) and the number of rolls completed at that point
// (maxMoneyRolls). It then displays these values along with the starting bet
// amount in the table insde of the results section of the index page.
function play(){
  clearErrors();
  var gameMoney = Number(document.forms["startForm"]["startingBet"].value);
  var totalRolls = 0;
  var maxMoney = gameMoney;
  var maxMoneyRolls = 0;

  if(gameMoney == "" || isNaN(gameMoney) || gameMoney <= 0){
    alert("The starting bet must be a value greater than 0.")
    document.forms["startForm"]["startingBet"].parentElement.className=
    "form-group form-inline row has-error";
    document.forms["startForm"]["startingBet"].focus();
    return false;
  }
  for(var i=1; gameMoney > 0; i++){
    var dieSum = rollDice();
    if(dieSum == 7){ //Add $4 for die sums equal to 7 (a win).
      gameMoney = gameMoney+4;
    }
    else{ //Subtract $1 for die sums not equal to 7 (a loss).
      gameMoney = gameMoney-1;
    }
    if(gameMoney>maxMoney){
      maxMoney = gameMoney;
      maxMoneyRolls=i;
    }
    totalRolls = i;
  }
  // The results table is displayed with the relevant values generated
  // by the for loop.
  document.getElementById("results").style.display = "block";
  document.getElementById("startingBetDisplay").innerText =
  "$"+Number(document.forms["startForm"]["startingBet"].value).toFixed(2);
  document.getElementById("totalRollsDisplay").innerText=totalRolls;
  document.getElementById("maxMoneyDisplay").innerText="$"+maxMoney.toFixed(2);
  document.getElementById("maxMoneyRollsDisplay").innerText=maxMoneyRolls;
  return false;
}
