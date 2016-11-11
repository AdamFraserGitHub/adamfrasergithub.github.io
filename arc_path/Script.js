var context
var x,y,xMath,yMath,r,theta,deltaTheta;
r = 250;
theta = 0; // pi radians
deltaTheta = 0.001; // pi radians

function start() {

  context= Canvas.getContext('2d');
  setInterval(draw,5);
}



function draw(){

  //Math
  yMath = Math.sin(Math.PI*theta) * r;
  xMath = 250 - Math.cos(Math.PI*theta) * r

  x = xMath + 50;
  y = 600 - yMath;

  context.clearRect(0,0, 600,600);
  document.getElementById("Canvas").style.backgroundColor = 'rgb(0,0,0)';

  context.beginPath();
  context.lineWidth = 6;
  context.strokeStyle = 'rgb(0,205,120)';
  context.arc(300,600,r,Math.PI*1.5,Math.PI*2,true);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle='rgb(255,0,140)';
  context.arc(x,y,10,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  if (theta > 0.5) {deltaTheta = -deltaTheta;}
  if (theta < 0) {deltaTheta = -deltaTheta;}


  theta += deltaTheta;

}
