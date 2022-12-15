
// Set the date we're counting down to
var countDownDate = new Date("Dec 16, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;


// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 48)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
document.querySelector(".demo").innerHTML = hours + "h:"
+ minutes + "m:" + seconds + "s ";

document.querySelector(".demo1").innerHTML = hours + "h:"
+ minutes + "m:" + seconds + "s ";

document.querySelector(".demo2").innerHTML = hours + "h:"
+ minutes + "m:" + seconds + "s ";

document.querySelector(".demo3").innerHTML = hours + "h:"
+ minutes + "m:" + seconds + "s ";


if(minutes < 10){
    minutes = "0"+minutes;
}
if(seconds<10){
   seconds = "0"+seconds;
}


// If the count down is over, write some text 
if (distance < 0) {
clearInterval(x);
document.querySelector(".demo").innerHTML = "EXPIRED";
}

}, 1000);
