// Variables
var presentDate = new Date();
var sd=arrowPosition(presentDate.getSeconds());
var md=arrowPosition(presentDate.getMinutes());
var hd = hoursArrowPosition(presentDate.getHours());
var count = 0;



// Function
function arrowPosition(d){
  if (d == 0) {
    d=60;
  }
  result = 360 / 60 * d;
  return result;
}

function hoursArrowPosition(d){
  if (d == 0) {
    d=24;
  }
  if (d > 12) {
    result = 360 / 12 * (d - 12);
  }
  result = 360 / 12 * d;
  return result;
}

function clock(){

// Second
  if (sd>=360) {
    sd = 0;
  }
  sd+=6

  var secArrow = document.getElementsByClassName("secondArrow")[0];
  secArrow.style.transform = "rotate("+ sd +"deg)";

// Minute
  if (sd == 360) {
    if (md >= 360) {
      md = 0;
    }
    md+=6;

  }
  var minArrow = document.getElementsByClassName("minuteArrow")[0];
  minArrow.style.transform = "rotate("+ md +"deg)";

// Hour
  if (md == 360) {
     count++;
    if (hd >= 360) {
      hd = 0;
    }
    if (count == 1) {
      hd+=30;
    }else if (count == 60) {
      count=0;
    }

  }
  var hArrow = document.getElementsByClassName("hourArrow")[0];
  hArrow.style.transform = "rotate("+ hd +"deg)";
}

function playAudio(){
  var x = document.getElementById("myAudio");
  x.play();
}

setInterval(clock, 1000);
setInterval(playAudio, 500);
