var functionDiagramCanvas = document.getElementById("functionDiagram"),
    functionDiagramCtx = functionDiagramCanvas.getContext('2d');

var functionCtxWidth = functionDiagramCanvas.width - 100, //compensates for innacuracies caused by decimals not being acuratly represented in graphics
    fucntionCtxHeight = functionDiagramCanvas.height + 10; //so does this

var theta = 0;

setInterval(timer, 1000/30);

function timer(){
    sineGraph();
    pointerSystem();
}

//draw sine graph
function sineGraph() {

    functionDiagramCtx.clearRect(0,0,functionDiagramCanvas.width,functionDiagramCanvas.height)
    
    functionDiagramCtx.lineWidth = 2;
    functionDiagramCtx.beginPath();
    functionDiagramCtx.moveTo(0,fucntionCtxHeight/2 + 5);
    for(var i = 0; i < 360; i++){
        functionDiagramCtx.lineTo(i/360*functionCtxWidth,fucntionCtxHeight/2 - Math.sin(Math.PI*i/180) * fucntionCtxHeight/2 + 5);
    }
    functionDiagramCtx.moveTo(0,fucntionCtxHeight/2 + 5);
    functionDiagramCtx.lineTo(functionCtxWidth,fucntionCtxHeight/2 + 5)
    functionDiagramCtx.stroke();
    functionDiagramCtx.closePath();
    
    functionDiagramCtx.fillStyle = 'rgb(0,0,255)';
    
    //axis
    functionDiagramCtx.beginPath();
    functionDiagramCtx.moveTo(2,fucntionCtxHeight );
    functionDiagramCtx.lineTo(2,0);
    functionDiagramCtx.stroke();
    functionDiagramCtx.closePath();
    
    //labels
    functionDiagramCtx.font = "12px Arial";
    functionDiagramCtx.fillText("1",5,10);
    functionDiagramCtx.fillText("0",5,fucntionCtxHeight/2);
    functionDiagramCtx.fillText("-1",5,fucntionCtxHeight - 10);
}

//pointer system
function pointerSystem() {
    var x0 = theta/360 * functionCtxWidth,
        x1 = seccondAngle(theta,trigFunction,units)/360 * functionCtxWidth,
        y = fucntionCtxHeight/2 - (Math.sin(theta/180 * Math.PI) * fucntionCtxHeight/2) + 5;
    
    //line
    functionDiagramCtx.beginPath();
    functionDiagramCtx.moveTo(0,y);
    functionDiagramCtx.lineTo(functionCtxWidth,y);
    functionDiagramCtx.stroke();
    functionDiagramCtx.closePath();
    
    //points (soln x)
    functionDiagramCtx.beginPath();
    functionDiagramCtx.fillStyle = 'rgb(150,0,255)';
    functionDiagramCtx.arc(x0,y,5,0,Math.PI*2,false);
    functionDiagramCtx.arc(x1,y,5,0,Math.PI*2,false);
    functionDiagramCtx.fill();
    functionDiagramCtx.closePath();
    functionDiagramCtx.beginPath();
    functionDiagramCtx.fillStyle = 'rgb(255,0,150)';
    functionDiagramCtx.arc(x1,y,5,0,Math.PI*2,false);
    functionDiagramCtx.fill();
    functionDiagramCtx.closePath();
    
//    theta+=0.5;
//    if (theta > 360) {
//        theta = 0;
//    }
}