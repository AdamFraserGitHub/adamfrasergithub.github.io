var canvas = document.getElementById("Canvas"), ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth, scrHeight = window.innerHeight;

var innerSquareX, innerSquareY,
    innerSquareWidth, innerSquareHeight;

var cube = {
    depth: 500-250, //vanishingPoint.z - depth gives distance from vanishingPoint
    width: 200,
    height: 200,

    x: scrWidth/2 - 100,
    y: scrHeight/2 - 100,

    xCenter: scrWidth/2,
    yCenter: scrHeight/2,
    zCenter: 50 / 2
}

var vanishingPoint = {
    x: scrWidth/2,
    y: scrHeight/2,
    z: 500
}

canvas.width = scrWidth;
canvas.height = scrHeight;

canvas.style.backgroundColor = 'rgb(0,0,0)';

setInterval(timer, 1000/30);

function timer(){
    render();
}

function render() {
    ctx.clearRect(0, 0,  scrWidth, scrHeight);

    cube.width = 200;
    cube.height = 200;

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,255,0)';
    ctx.fillStyle = 'rgba(0,255,255,0.2)';
    ctx.lineWidth = 0.75;

    ctx.rect(cube.x,cube.y,cube.width,cube.height); 
    innerSquareX = cube.xCenter - ((cube.xCenter - cube.x) * (cube.depth /vanishingPoint.z));
    innerSquareY = cube.yCenter - ((cube.yCenter - cube.y) * (cube.depth /vanishingPoint.z));

    ctx.moveTo(cube.x,cube.y);
    ctx.lineTo(innerSquareX,innerSquareY);

    ctx.moveTo(cube.x+cube.width, cube.y);
    ctx.lineTo(innerSquareX+innerSquareWidth,innerSquareY);

    ctx.moveTo(cube.x+cube.width,cube.y+cube.height);
    ctx.lineTo(innerSquareX+innerSquareWidth,innerSquareY+innerSquareHeight);

    ctx.moveTo(cube.x,cube.y+cube.height);
    ctx.lineTo(innerSquareX,innerSquareY+innerSquareHeight);

    innerSquareWidth = (cube.width * (cube.depth /vanishingPoint.z));
    innerSquareHeight = (cube.height * (cube.depth /vanishingPoint.z));

    ctx.rect(innerSquareX,innerSquareY,innerSquareWidth,innerSquareHeight);

    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

function scrResized() {
    scrWidth = window.innerWidth;
    scrHeight = window.innerHeight;
    canvas.width = scrWidth;
    canvas.height = scrHeight;
}
