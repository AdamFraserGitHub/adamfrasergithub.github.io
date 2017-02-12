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


