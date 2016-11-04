var context;
var x=0;
var y=0;
var dx=15;
var dy=0;

function init()
{
  context= Canvas.getContext('2d');
  setInterval(draw,10);
}

function draw()
{
  context.clearRect(x,y, 1080,720);

  context.beginPath();
  context.fillStyle="#FF0000";
  context.arc(x,y+20,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#FF9600";
  context.arc(x,y+60,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#FFFF00";
  context.arc(x,y+100,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#00FF00";
  context.arc(x,y+140,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#0096FF";
  context.arc(x,y+180,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#0000FF";
  context.arc(x,y+220,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle="#FF00FF";
  context.arc(x,y+260,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  // Boundary Logic
if( x<0 || x>1060) dx=-dx; 
if( y<0 || y>460) dy=-dy; 
x+=dx; 
y+=dy;
}
