var canvas = document.getElementById("Canvas"), ctx = canvas.getContext("2d"),
    scrWidth = window.innerWidth, scrHeight = window.innerHeight;

var innerSquareX, innerSquareY,
    innerSquareWidth, innerSquareHeight;

var cubeSideLen = 500;
var theta = 0;
var arcPath;

var cube = [];

    for (var i = 0; i < 8; i++) {
        cube[i] = [];
    }

    vertexAsignment();
    arcPathDeffinition();

var vanishingPoint = {
    x: scrWidth/2,
    y: scrHeight/2,
    z: cubeSideLen
}

canvas.width = scrWidth;
canvas.height = scrHeight;

canvas.style.backgroundColor = 'rgb(0,0,0)';

setInterval(timer, 1000/30);

function timer(){
    render();
    rotation();
}

function render() {
    ctx.clearRect(0, 0,  scrWidth, scrHeight);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,255,0,1)';
    ctx.fillStyle = 'rgba(0,255,255,0.3)';
    ctx.lineWidth = 1.5;

    //closer square
    ctx.moveTo(cube[0][0] + ((1/2 * cubeSideLen) * cube[0][2]/vanishingPoint.z),cube[0][1] + ((1/2 * cubeSideLen) * cube[0][2]/vanishingPoint.z));
    ctx.lineTo(cube[1][0] - ((1/2 * cubeSideLen) * cube[1][2]/vanishingPoint.z),cube[1][1] + ((1/2 * cubeSideLen) * cube[1][2]/vanishingPoint.z));
    ctx.lineTo(cube[2][0] - ((1/2 * cubeSideLen) * cube[2][2]/vanishingPoint.z),cube[2][1] - ((1/2 * cubeSideLen) * cube[2][2]/vanishingPoint.z));
    ctx.lineTo(cube[3][0] + ((1/2 * cubeSideLen) * cube[3][2]/vanishingPoint.z),cube[3][1] - ((1/2 * cubeSideLen) * cube[3][2]/vanishingPoint.z));
    //closing off
    ctx.lineTo(cube[0][0] + ((1/2 * cubeSideLen) * cube[0][2]/vanishingPoint.z),cube[0][1] + ((1/2 * cubeSideLen) * cube[0][2]/vanishingPoint.z));

    //further square
    ctx.moveTo(cube[4][0] + ((1/2 * cubeSideLen) * cube[4][2]/vanishingPoint.z),cube[4][1] + ((1/2 * cubeSideLen) * cube[4][2]/vanishingPoint.z));
    ctx.lineTo(cube[5][0] - ((1/2 * cubeSideLen) * cube[5][2]/vanishingPoint.z),cube[5][1] + ((1/2 * cubeSideLen) * cube[5][2]/vanishingPoint.z));
    ctx.lineTo(cube[6][0] - ((1/2 * cubeSideLen) * cube[6][2]/vanishingPoint.z),cube[6][1] - ((1/2 * cubeSideLen) * cube[6][2]/vanishingPoint.z));
    ctx.lineTo(cube[7][0] + ((1/2 * cubeSideLen) * cube[7][2]/vanishingPoint.z),cube[7][1] - ((1/2 * cubeSideLen) * cube[7][2]/vanishingPoint.z));
    //closing off
    ctx.lineTo(cube[4][0] + ((1/2 * cubeSideLen) * cube[4][2]/vanishingPoint.z),cube[4][1] + ((1/2 * cubeSideLen) * cube[4][2]/vanishingPoint.z));

    //z-lines from closer square to further square
    ctx.moveTo(cube[0][0] + ((1/2 * cubeSideLen) * cube[0][2]/vanishingPoint.z),cube[0][1] + ((1/2 * cubeSideLen) * cube[0][2]/vanishingPoint.z));
    ctx.lineTo(cube[4][0] + ((1/2 * cubeSideLen) * cube[4][2]/vanishingPoint.z),cube[4][1] + ((1/2 * cubeSideLen) * cube[4][2]/vanishingPoint.z));

    ctx.moveTo(cube[1][0] - ((1/2 * cubeSideLen) * cube[1][2]/vanishingPoint.z),cube[1][1] + ((1/2 * cubeSideLen) * cube[1][2]/vanishingPoint.z));
    ctx.lineTo(cube[5][0] - ((1/2 * cubeSideLen) * cube[5][2]/vanishingPoint.z),cube[5][1] + ((1/2 * cubeSideLen) * cube[5][2]/vanishingPoint.z));

    ctx.moveTo(cube[2][0] - ((1/2 * cubeSideLen) * cube[2][2]/vanishingPoint.z),cube[2][1] - ((1/2 * cubeSideLen) * cube[2][2]/vanishingPoint.z));
    ctx.lineTo(cube[6][0] - ((1/2 * cubeSideLen) * cube[6][2]/vanishingPoint.z),cube[6][1] - ((1/2 * cubeSideLen) * cube[6][2]/vanishingPoint.z));

    ctx.moveTo(cube[3][0] + ((1/2 * cubeSideLen) * cube[3][2]/vanishingPoint.z),cube[3][1] - ((1/2 * cubeSideLen) * cube[3][2]/vanishingPoint.z));
    ctx.lineTo(cube[7][0] + ((1/2 * cubeSideLen) * cube[7][2]/vanishingPoint.z),cube[7][1] - ((1/2 * cubeSideLen) * cube[7][2]/vanishingPoint.z));

    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

function rotation() {

    cube[0][0] = arcPath.radius * Math.cos(Math.PI*theta) + 100;
    cube[0][2] = arcPath.radius * Math.sin(Math.PI*theta) + 0;

    cube[1][0] = arcPath.radius * Math.cos(Math.PI*theta) + cubeSideLen + 100;
    cube[1][2] = arcPath.radius * Math.sin(Math.PI*theta) + 0;

    cube[2][0] = arcPath.radius * Math.cos(Math.PI*theta) + cubeSideLen + 100;
    cube[2][2] = arcPath.radius * Math.sin(Math.PI*theta) + 0;

    cube[3][0] = arcPath.radius * Math.cos(Math.PI*theta) + 0 + 100;
    cube[3][2] = arcPath.radius * Math.sin(Math.PI*theta) + 0;

    theta+=0.001;
}

function arcPathDeffinition() {
    arcPath = {
        radius: Math.sqrt(Math.pow(cubeSideLen, 2) + Math.pow(cubeSideLen/2, 2)),
        x: cube[0][0] + 1/2 * cubeSideLen,
        y: cube[0][1] + 1/2 * cubeSideLen
    }
}

function vertexAsignment() {
    cube[0][0] = 0 + 100;
    cube[0][1] = 0 + 100;
    cube[0][2] = 0;

    cube[1][0] = cubeSideLen + 100;
    cube[1][1] = 0 + 100;
    cube[1][2] = 0;

    cube[2][0] = cubeSideLen + 100;
    cube[2][1] = cubeSideLen + 100;
    cube[2][2] = 0;

    cube[3][0] = 0 + 100;
    cube[3][1] = cubeSideLen + 100;
    cube[3][2] = 0;

    cube[4][0] = 0 + 100;
    cube[4][1] = 0 + 100;
    cube[4][2] = 250;

    cube[5][0] = cubeSideLen + 100;
    cube[5][1] = 0 + 100;
    cube[5][2] = 250;

    cube[6][0] = cubeSideLen + 100;
    cube[6][1] = cubeSideLen + 100;
    cube[6][2] = 250;

    cube[7][0] = 0 + 100;
    cube[7][1] = cubeSideLen + 100;
    cube[7][2] = 250;
    //see root for clarification.png on what each factor of this array means
}

function scrResized() {
    scrWidth = window.innerWidth;
    scrHeight = window.innerHeight;
    canvas.width = scrWidth;
    canvas.height = scrHeight;
}
