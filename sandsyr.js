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

var topLeft = document.getElementById("ticTacToeTopLeft");
var topMiddle = document.getElementById("ticTacToeTopMiddle");
var topRight = document.getElementById("ticTacToeTopRight");

var middleLeft = document.getElementById("ticTacToeMiddleLeft");
var middleMiddle = document.getElementById("ticTacToeMiddleMiddle");
var middleRight = document.getElementById("ticTacToeMiddleRight");

var bottomLeft = document.getElementById("ticTacToeBottomLeft");
var bottomMiddle = document.getElementById("ticTacToeBottomMiddle");
var bottomRight = document.getElementById("ticTacToeBottomRight");

const topSquares = [topLeft, topMiddle, topRight];
const middleSquares = [middleLeft, middleMiddle, middleRight];
const bottomSquares = [bottomLeft, bottomMiddle, bottomRight];
const diagonalOneSquares = [topLeft, middleMiddle, bottomRight];
const diagonalTwoSquares = [bottomLeft, middleMiddle, bottomRight];

var friendlySquares = document.getElementsByClassName("friendlySquare");
var enemySquares = document.getElementsByClassName("enemySquare");
var ticTacToeGoAhead = true;

function secureTheTicTacToeWin() {
  break;
}

function ticTacToeLoss() {
  break;
}

function ticTacToeWinDetection() {
  friendlySquareLineCounter = 0;
  for (let i = 0; i < topSquares.length; i++) {
    if (topSquares[i].classList.contains("friendlySquare")) {
      friendlySquareLineCounter = friendlySquareLineCounter + 1;
    }
  }
  if (friendlySquareLineCounter == 1) {
    ticTacToeGoAhead = true;
  } else if (friendlySquareLineCounter == 2) {
    secureTheTicTacToeWin();
  } else if (friendlySquareLineCounter == 3) {
    ticTacToeLoss();
  }
}

function ticTacToeLossDetection() {
  break;
}

function ticTacToeTopLeft() {
  break;
}
