var canvas = document.getElementById("Canvas"), ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth, scrHeight = window.innerHeight;

var cube = {
    depth: 50,
    width: 50,
    height: 50,

    x: 20,
    y: 20,

    xCenter: scrWidth/2,
    yCenter: scrHeight/2,
    zCenter: 50 / 2
}

var vanishingPoint = {
    x: scrWidth/2,
    y: scrHeight/2,
    z: 250
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

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,255,0)';
    ctx.fillStyle = 'rgba(0,255,255,0.2)';
    ctx.lineWidth = 1;

    ctx.rect(cube.x,cube.y,cube.width,cube.height);

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
