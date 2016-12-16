var ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
    n = 6,
    radius = 50,
    centerX = [], centerY = [],
    xArray = [], yArray = [],
    movtY = 0, movtX = 0;

setInterval(draw,1);

function draw(){

// ctx.clearRect(0,0,800,800);

var regularCenterX = Math.random() * (2*radius - radius) + radius,
    regularCenterY = Math.random() * (2*radius - radius) + radius;

ctx.beginPath();
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.lineWidth = 1;

ctx.moveTo (regularCenterX +  radius * Math.cos(0) + movtX, regularCenterY +  radius *  Math.sin(0) + movtY);          
 
for (var i = 1; i <= n - 1; i++) {
     centerX[i] = Math.random() * (2*radius - radius) + radius;
     centerY[i] = Math.random() * (2*radius - radius) + radius;

     xArray[i] = centerX[i] + radius * Math.cos(i * 2 * Math.PI / n);
     yArray[i] = centerY[i] + radius * Math.sin(i * 2 * Math.PI / n);

     ctx.lineTo (xArray[i] + movtX, yArray[i] + movtY);
}

ctx.moveTo(xArray[n-1] + movtX,yArray[n-1] + movtY);
ctx.lineTo (regularCenterX + radius * Math.cos(n * 2 * Math.PI / n) + movtX, regularCenterY + radius * Math.sin(n * 2 * Math.PI / n) + movtY);

ctx.moveTo(regularCenterX +  radius * Math.cos(0) + movtX, regularCenterY +  radius *  Math.sin(0) + movtY);
ctx.lineTo(xArray[4] + movtX,yArray[4] + movtY);

ctx.moveTo(xArray[1] + movtX,yArray[1] + movtY);
ctx.lineTo(xArray[3] + movtX,yArray[3] + movtY);

ctx.moveTo(xArray[2] + movtX,yArray[2] + movtY);
ctx.lineTo(xArray[5] + movtX,yArray[5] + movtY);

ctx.moveTo(xArray[1] + movtX,yArray[1] + movtY);
ctx.lineTo(xArray[4] + movtX,yArray[4] + movtY);

ctx.moveTo(xArray[1] + movtX,yArray[1] + movtY);
ctx.lineTo(xArray[5] + movtX,yArray[5] + movtY);

ctx.moveTo(xArray[2] + movtX,yArray[2] + movtY);
ctx.lineTo(regularCenterX +  radius * Math.cos(0) + movtX, regularCenterY +  radius *  Math.sin(0) + movtY);

ctx.stroke();
ctx.closePath();

ctx.beginPath();

ctx.arc(regularCenterX + movtX, regularCenterX + movtY, 5, 0, Math.PI*2, false);

ctx.fillStyle = 'rgb(255,0,255)'
ctx.fill();
ctx.closePath()

if (movtY < 6000){
    movtY+=3*radius;
} else {
    movtY = 0;
    movtX+=3*radius;
}
}
