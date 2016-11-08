var itWasTakenOutOfContext;
var yv = 5;
y = 50;

function start() {

  itWasTakenOutOfContext= Canvas.getContext('2d');
  setInterval(draw,10);


}

function draw() {
  itWasTakenOutOfContext.clearRect(0,0, 1080,720);
  document.getElementById("Canvas").style.backgroundColor = 'rgb(0, 0, 0)';

  itWasTakenOutOfContext.beginPath();
  itWasTakenOutOfContext.fillStyle="#FF0000";
  itWasTakenOutOfContext.arc(100,y,5,0,Math.PI*2,true);
  itWasTakenOutOfContext.closePath();
  itWasTakenOutOfContext.fill();

  y+=yv;
}
