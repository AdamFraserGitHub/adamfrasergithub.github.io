var generator = new Simple1DNoise(),
    x = 1,y,
    textOut = document.getElementById("output"),
    Threshold = 0.75, //25% of values
    blockValues = [], //[[x],[y]]
    counter = 1,
    xPos = 100;

blockValues[0] = [];
blockValues[1] = [];

for (var i = 0; i < 255; i++){
    x+=1;

    y = generator.getVal(x);

    if (y >= Threshold){
        blockValues[0][counter] = xPos;
        blockValues[1][counter] = y;
        counter++;
    }

    xPos+=65;
}

var ctx = Canvas.getContext("2d"),
    canvas = document.getElementById("Canvas"),
    scrWidth = window.innerWidth,
    scrHeight = window.innerHeight;


// for (var i = 1; i < counter; i++){
//     ctx.beginPath();
//     ctx.fillStyle = 'rgb(255,0,0)';
//     ctx.arc(xPos,blockValues[1][i] * 300,10,0,Math.PI*2,false);
//     ctx.fill();
//     ctx.closePath();
// }

// ctx.beginPath();
// ctx.strokeStyle = 'rgb(255,0,255)';
// ctx.lineWidth = 1;
// ctx.moveTo(0,blockValues[1][1] * 300);
// for (var i = 2; i < counter; i++){
//     ctx.lineTo(blockValues[0][i],blockValues[1][i] * 300);
// }
// ctx.stroke();
// ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgb(0,255,0)';
for (var i = 1; i < counter; i++){
    ctx.rect(blockValues[0][i],blockValues[1][i] * 300 - 15,50,15);
}
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.moveTo(0,300);
ctx.lineTo(16675,300)
ctx.stroke();
ctx.closePath();

