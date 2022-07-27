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

const classist = document.getElementsByClassName("tableThingy");

function hideYoIdentity() {
  .classList.add("borderHid");
}

function borderTwitch() {
  var twitch = document.getElementById("twitch");
  classist.forEach(hideYoIdentity());
  twitch.classList.remove("borderHid");
}

function borderYoutube() {
  var youtube = document.getElementById("youtube");
  classist.forEach(hideYoIdentity());
  youtube.classList.remove("borderHid");
}

function borderDiscord() {
  var discord = document.getElementById("discord");
  classist.forEach(hideYoIdentity());
  discord.classList.remove("borderHid");
}

function borderTiktok() {
  var tiktok = document.getElementById("tiktok");
  classist.forEach(hideYoIdentity());
  tiktok.classList.remove("borderHid");
}
