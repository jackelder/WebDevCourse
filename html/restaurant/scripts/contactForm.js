/*
Name: Jack Elder
Date Created: April 15, 2019
Date Modified: April 16, 2019
JavaScript to be used for validating submissions to the contact info form
of the Contact Us page on the Double R Diner restaurant website.
*/

function clearErrors(){
for (var loopCounter = 0;
        loopCounter < document.forms["contactForm"].elements.length;
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function validate(){
  clearErrors();
  var name=document.forms["contactForm"]["name"].value;
  var email=document.forms["contactForm"]["email"].value;
  var phone=document.forms["contactForm"]["phone"].value;
  var reason=document.forms["contactForm"]["reason"].value;
  var info=document.forms["contactForm"]["info"].value;
  var visit=document.forms["contactForm"]["visit"].value;
  var monday=document.getElementById("monday").checked;
  var tuesday=document.getElementById("tuesday").checked;
  var wednesday=document.getElementById("wednesday").checked;
  var thursday=document.getElementById("thursday").checked;
  var friday=document.getElementById("friday").checked;

  if(name==""){
    
  }

  return false;
}
