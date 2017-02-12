var functionDiagramCanvas = document.getElementById("functionDiagram"),
    functionDiagramCtx = functionDiagramCanvas.getContext('2d');

var scrWidth = functionDiagramCanvas.width - 100, //compensates for innacuracies caused by decimals not being acuratly represented in graphics
    scrHeight = functionDiagramCanvas.height - 10; //so does this

var theta = 0;

setInterval(timer, 1000/30);

function timer(){
    sineGraph();
    pointerSystem();
}

//draw sine graph
function sineGraph() {

    functionDiagramCtx.clearRect(0,0,functionDiagramCanvas.width,functionDiagramCanvas.height)

    functionDiagramCtx.beginPath();
    functionDiagramCtx.moveTo(0,scrHeight/2 + 5);
    for(var i = 0; i < 360; i++){
        functionDiagramCtx.lineTo(i/360*scrWidth,scrHeight/2 - Math.sin(Math.PI*i/180) * scrHeight/2 + 5);
    }
    functionDiagramCtx.moveTo(0,scrHeight/2);
    functionDiagramCtx.lineTo(scrWidth,scrHeight/2 + 5)
    functionDiagramCtx.stroke();
    functionDiagramCtx.closePath();
    
    functionDiagramCtx.fillStyle = 'rgb(0,0,255)';
    
    //axis
    functionDiagramCtx.beginPath();
    functionDiagramCtx.moveTo(1,scrHeight);
    functionDiagramCtx.lineTo(1,0);
    functionDiagramCtx.stroke();
    functionDiagramCtx.closePath();
    
    //labels
    functionDiagramCtx.font = "12px Arial";
    functionDiagramCtx.fillText("1",5,10);
    functionDiagramCtx.fillText("0",5,scrHeight/2);
    functionDiagramCtx.fillText("-1",5,scrHeight - 10);
}

//pointer system
function pointerSystem() {
    var x0 = theta/360 * scrWidth,
        y0 = scrHeight/2 - (Math.sin(theta/180 * Math.PI) * scrHeight/2) + 5,
        x1 = seccondAngle(theta,trigFunction,units)/360 * scrWidth,
        y1 = scrHeight/2 - (Math.sin(seccondAngle(theta,trigFunction,units)/180 * Math.PI) * scrHeight/2) + 5;
    functionDiagramCtx.beginPath();
    functionDiagramCtx.fillStyle = 'rgb(255,0,255)';
    functionDiagramCtx.arc(x0,y0,5,0,Math.PI*2,false);
    functionDiagramCtx.arc(x1,y1,5,0,Math.PI*2,false);
    functionDiagramCtx.fill();
    functionDiagramCtx.closePath();
    
    theta+=2;
    if (theta > 360) {
        theta = 0;
    }
}