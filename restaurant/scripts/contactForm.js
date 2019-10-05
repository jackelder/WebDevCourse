/*
Name: Jack Elder
Date Created: April 15, 2019
Date Modified: April 16, 2019
JavaScript to be used for validating submissions to the contact info form
of the Contact Us page on the Double R Diner restaurant website.
*/

// clearErrors removes the has-error class name from the startingBet parent
// div if applicable.
function clearErrors(){
for (var loopCounter = 0;
        loopCounter < document.forms["contactForm"].elements.length;
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "col-sm-6 col-lg-4";
        }
    }
}

// requiredAlert provides an indication to the user that the required
// fields have not all been completed.
function requiredAlert(){
  alert("Please complete all required fields (denoted in bold).");
}

// validate clears errors then takes in all of the information provided in the
// submitted contactForm. "Best days to contact you" checkbox information is stored in
// independent booleans for each day of the week. This information could be used
// as needed in future functionality or stored elsewhere. validate then checks that
// the required fields have been completed (here, the name and email fields). If
// all required fields have been completed, then an alert of succesful form
// submission is displayed to the user.
function validate(){
  clearErrors();
  var name=document.forms["contactForm"]["name"].value;
  var email=document.forms["contactForm"]["email"].value;
  var phone=document.forms["contactForm"]["phone"].value;
  var reason=document.forms["contactForm"]["reason"].value;
  var info=document.forms["contactForm"]["info"].value;
  var visit=document.forms["contactForm"]["visit"].value;
  var monday=document.getElementById("monday").checked; //boolean indicating availability on each day
  var tuesday=document.getElementById("tuesday").checked;
  var wednesday=document.getElementById("wednesday").checked;
  var thursday=document.getElementById("thursday").checked;
  var friday=document.getElementById("friday").checked;
  if(name==""){
    requiredAlert();
    document.forms["contactForm"]["name"].parentElement.className=
    "col-sm-6 col-lg-4 has-error";
    document.forms["contactForm"]["name"].focus();
    return false;
  }
  if(email==""){
    requiredAlert();
    document.forms["contactForm"]["email"].parentElement.className=
    "col-sm-6 col-lg-4 has-error";
    document.forms["contactForm"]["email"].focus();
    return false;
  }
  alert("Thank you! Your information has been received and we'll be in touch with you as soon as possible.");
  location.reload();
  return false;
}
