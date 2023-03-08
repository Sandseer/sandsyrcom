console.log("Yo mama fat");

// The following code is from our lord and savior w3schools

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// w3schools code end

function borderSwitcher(socialsID) {
  var socialStyle = document.getElementById(socialsID).style;
  alert(socialStyle.visibility);
  if (socialStyle.visibility == 'hidden') {
    socialStyle.visibility = 'visible';
  } else {
    socialStyle.visibility = 'hidden';
  }

  /* Trying to see if above code works instead. thanks function parameters!
function borderSwitcher(socialsID) {
  var social = document.getElementById(socialsID);
  if (social.classList.contains("borderHid")) {
    for (let i = 0; i < classist.length; i++) {
      classist[i].classList.add("borderHid");
    }
    social.classList.remove("borderHid");
  } else {
    social.classList.add("borderHid");
  }
  */
}
