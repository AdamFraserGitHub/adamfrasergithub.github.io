var generator = new Simple1DNoise();
var x = 1, xDis = 0;
var noiseOut = document.getElementById("output");
var xDisOut = document.getElementById("xDisOut");
var y, yDis;
var lineColor = 'rgb(255,0,0)'

setInterval(loopydoo, 1000/60);

function loopydoo(){
    x+=0.5;

    y = generator.getVal(x);

    noiseOut.innerHTML = y;
    xDisOut.innerHTML = xDis;

    yDis = y*100;

    var Canvas=document.getElementById("Canvas");
    var ctx=Canvas.getContext("2d");

    if (xDis < 1000/7){
        lineColor = 'rgb(255,0,0)'
    } else if (xDis > 1000/7 && xDis < 1000/7 * 2){
        lineColor = 'rgb(255,150,0)'
    } else if (xDis > 1000/7 * 2 && xDis < 1000/7 * 3){
        lineColor = 'rgb(255,255,0)'
    } else if (xDis > 1000/7 * 3 && xDis < 1000/7 * 4){
        lineColor = 'rgb(0,255,0)'
    } else if (xDis > 1000/7 * 4 && xDis < 1000/7 * 5){
        lineColor = 'rgb(0,255,255)'
    } else if (xDis > 1000/7 * 5 && xDis < 1000/7 * 6){
        lineColor = 'rgb(0,0,255)'
    } else if (xDis > 1000/7 * 6 && xDis < 1000){
        lineColor = 'rgb(255,0,255)'
    }
    
    
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.moveTo(xDis,250);
    ctx.lineTo(xDis + 5,yDis);
    ctx.stroke();

    xDis +=5;

    if(xDis >= 1000) {
        ctx.clearRect(0,0,1000,500);
        xDis = 0;
    }
}