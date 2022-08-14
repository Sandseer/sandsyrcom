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

function borderTwitch() {
  var twitch = document.getElementById("twitch");
  if (twitch.classList.contains("borderHid")) {
    for (let i = 0; i < classist.length; i++) {
      classist[i].classList.add("borderHid");
    }
    twitch.classList.remove("borderHid");
  } else {
    twitch.classList.add("borderHid");
  }
}

function borderYoutube() {
  var youtube = document.getElementById("youtube");
  if (youtube.classList.contains("borderHid")) {
    for (let i = 0; i < classist.length; i++) {
      classist[i].classList.add("borderHid");
    }
    youtube.classList.remove("borderHid");
  } else {
    youtube.classList.add("borderHid");
  }
}

function borderDiscord() {
  var discord = document.getElementById("discord");
  if (discord.classList.contains("borderHid")) {
    for (let i = 0; i < classist.length; i++) {
      classist[i].classList.add("borderHid");
    }
    discord.classList.remove("borderHid");
  } else {
    discord.classList.add("borderHid");
  }
}

function borderTiktok() {
  var tiktok = document.getElementById("tiktok");
  if (tiktok.classList.contains("borderHid")) {
    for (let i = 0; i < classist.length; i++) {
      classist[i].classList.add("borderHid");
    }
    tiktok.classList.remove("borderHid");
  } else {
    tiktok.classList.add("borderHid");
  }
}
