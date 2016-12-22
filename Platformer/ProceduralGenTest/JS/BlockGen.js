var generator = new Simple1DNoise(),
    x = 1,y,
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

// ctx.beginPath();
// ctx.fillStyle = 'rgb(0,255,0)';
// for (var i = 1; i < counter; i++){
//     ctx.rect(blockValues[0][i],blockValues[1][i] * 300 - 15,50,15);
// }
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = 'rgb(0,0,0)';
// ctx.moveTo(0,300);
// ctx.lineTo(16675,300)
// ctx.stroke();
// ctx.closePath();

