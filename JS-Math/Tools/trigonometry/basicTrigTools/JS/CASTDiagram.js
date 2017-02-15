var CASTDiagramCanvas = document.getElementById("CASTDiagram"),
    CASTDiagramCtx = CASTDiagramCanvas.getContext('2d');

var ctxWidth = CASTDiagramCanvas.width,
    ctxHeight = CASTDiagramCanvas.height;

setInterval(animation, 1000/30)
function animation() {
    CASTDiagramCtx.clearRect(0,0,ctxWidth,ctxHeight);
    //draws CAST diagram circular outline
    CASTDiagramCtx.lineWidth = 3;
    CASTDiagramCtx.beginPath();
    CASTDiagramCtx.strokeStyle = 'rgba(0,0,0,1)';
    CASTDiagramCtx.arc(ctxWidth/2,ctxHeight/2,ctxWidth/2-25,0,Math.PI*2,false);
    CASTDiagramCtx.closePath();
    CASTDiagramCtx.stroke();

    //draws lines on CAST diagram
    CASTDiagramCtx.beginPath();
    CASTDiagramCtx.strokeStyle = 'rgba(255,0,0,1)';
    CASTDiagramCtx.moveTo(ctxWidth/2,ctxHeight/2);
    CASTDiagramCtx.lineTo(ctxWidth/2 + ctxWidth/2 - 15,ctxHeight/2);
    CASTDiagramCtx.moveTo(ctxWidth/2,ctxHeight/2);
    CASTDiagramCtx.lineTo(ctxWidth/2 - ctxWidth/2 + 15,ctxHeight/2);
    CASTDiagramCtx.moveTo(ctxWidth/2,ctxHeight/2);
    CASTDiagramCtx.lineTo(ctxWidth/2,ctxHeight/2 + ctxHeight/2 - 15);
    CASTDiagramCtx.moveTo(ctxWidth/2,ctxHeight/2);
    CASTDiagramCtx.lineTo(ctxWidth/2,ctxHeight/2 - ctxHeight/2 + 15);
    CASTDiagramCtx.closePath();
    CASTDiagramCtx.stroke();
    
    //draws line that follows angle
    CASTDiagramCtx.beginPath();
    CASTDiagramCtx.strokeStyle = 'rgba(150,0,255,1)';
    CASTDiagramCtx.arc(ctxWidth/2,ctxHeight/2,75,0,(360-theta)/180*Math.PI, true);
    CASTDiagramCtx.stroke();
    CASTDiagramCtx.closePath();
    

    //adds labels to CAST diagram
    CASTDiagramCtx.fillStyle = 'rgb(0,0,255)';
    CASTDiagramCtx.font = "12px Arial";
    CASTDiagramCtx.fillText("0°/360°",ctxWidth - 67,ctxHeight/2 - 5);
    CASTDiagramCtx.fillText("90°",ctxWidth/2 -20,40);
    CASTDiagramCtx.fillText("180°",30,ctxHeight/2 + 15);
    CASTDiagramCtx.fillText("270°",ctxWidth/2 + 5,ctxHeight - 30);

    CASTDiagramCtx.font = "18px Arial";
    CASTDiagramCtx.fillText("x",ctxWidth*2/3,ctxHeight*1/3);
    CASTDiagramCtx.fillText("180 - x",ctxWidth*1/3 - 20,ctxHeight*1/3);
    CASTDiagramCtx.fillText("180 + x",ctxWidth*1/3 - 20,ctxHeight*2/3);
    CASTDiagramCtx.fillText("360 - x",ctxWidth*2/3 - 20,ctxHeight*2/3);
}
function controllsForThingy(e){
    var lool = true;
    if(e.clientX >= 200 && e.clientY <= 200 + 130){
        var x = e.clientX - 400/2,
            y =(400/2 - (e.clientY -130));

        theta = Math.atan(y/x) * (180/Math.PI);
    } else if(e.clientX < 200 && e.clientY <= 200 + 130){
        var x = 400/2 - e.clientX,
            y =(400/2 - (e.clientY -130));

        theta = 180 - (Math.atan(y/x) * (180/Math.PI));
    } else if(e.clientX <= 200 && e.clientY > 200 + 130){
        var x = 400/2 - e.clientX,
            y =(400/2 - (e.clientY -130));

        theta = 180 - (Math.atan(y/x) * (180/Math.PI));
    } else if(e.clientX > 200 && e.clientY > 200 + 130){
        var x = 400/2 - e.clientX,
            y =(400/2 - (e.clientY -130));

        theta = 360 - (Math.atan(y/x) * (180/Math.PI));
    }
}
