var CASTDiagramCanvas = document.getElementById("CASTDiagram"),
    CASTDiagramCtx = CASTDiagramCanvas.getContext('2d');

var scrWidth = CASTDiagramCanvas.width,
    scrHeight = CASTDiagramCanvas.height;

//draws CAST diagram circular outline
CASTDiagramCtx.beginPath();
CASTDiagramCtx.strokeStyle = 'rgba(0,0,0,1)';
CASTDiagramCtx.lineWidth = 1.5;
CASTDiagramCtx.arc(scrWidth/2,scrHeight/2,scrWidth/2-25,0,Math.PI*2,false);
CASTDiagramCtx.closePath();
CASTDiagramCtx.stroke();

//draws lines on CAST diagram
CASTDiagramCtx.beginPath();
CASTDiagramCtx.strokeStyle = 'rgba(255,0,0,1)';
CASTDiagramCtx.lineWidth = 2;
CASTDiagramCtx.moveTo(scrWidth/2,scrHeight/2);
CASTDiagramCtx.lineTo(scrWidth/2 + scrWidth/2 - 15,scrHeight/2);
CASTDiagramCtx.moveTo(scrWidth/2,scrHeight/2);
CASTDiagramCtx.lineTo(scrWidth/2 - scrWidth/2 + 15,scrHeight/2);
CASTDiagramCtx.moveTo(scrWidth/2,scrHeight/2);
CASTDiagramCtx.lineTo(scrWidth/2,scrHeight/2 + scrHeight/2 - 15);
CASTDiagramCtx.moveTo(scrWidth/2,scrHeight/2);
CASTDiagramCtx.lineTo(scrWidth/2,scrHeight/2 - scrHeight/2 + 15);
CASTDiagramCtx.closePath();
CASTDiagramCtx.stroke();

//adds labels to CAST diagram
CASTDiagramCtx.fillStyle = 'rgb(0,0,255)';
CASTDiagramCtx.font = "12px Arial";
CASTDiagramCtx.fillText("0°/360°",scrWidth - 67,scrHeight/2 - 5);
CASTDiagramCtx.fillText("90°",scrWidth/2 -20,40);
CASTDiagramCtx.fillText("180°",30,scrHeight/2 + 15);
CASTDiagramCtx.fillText("270°",scrWidth/2 + 5,scrHeight - 30);

CASTDiagramCtx.font = "18px Arial";
CASTDiagramCtx.fillText("x",scrWidth*2/3,scrHeight*1/3);
CASTDiagramCtx.fillText("180 - x",scrWidth*1/3 - 20,scrHeight*1/3);
CASTDiagramCtx.fillText("180 + x",scrWidth*1/3 - 20,scrHeight*2/3);
CASTDiagramCtx.fillText("360 - x",scrWidth*2/3 - 20,scrHeight*2/3);

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
