var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);

var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);

var c = document.getElementById("myCanvas6");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

var c = document.getElementById("myCanvas7");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

function myCanvas8() {
    var c = document.getElementById("myCanvas8");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
  }