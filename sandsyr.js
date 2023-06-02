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

function borderSwitcher(socialID) {
    if (socialID.style.display == "") {
        var socialElements = document.getElementsByClassName("socialButton");
        for (var i = 0; i < socialElements.length; i++) {
            socialElements[i].style.display = "";
        }
        socialID.style.display = "inline-block";
    } else {
        socialID.style.display = "";
    }
}
