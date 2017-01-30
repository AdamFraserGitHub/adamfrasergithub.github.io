var canvas = document.getElementById("Canvas"),
    ctx = canvas.getContext("2d"),
    keyPress = [],
	keyHasBeenUp = true;

var mapLength = 30,
    tileLength = canvas.width/mapLength

document.body.addEventListener("keydown", function(e) {
	keyPress[e.keyCode] = true;
});

//stops pressing key
document.body.addEventListener("keyup", function(e) {
	keyPress[e.keyCode] = false;
});


setInterval (thread0, 1000/30);

function thread0(){
	controller();
	calculations();
    graphics();
}

function controller() {
	//right
	if (keyPress[39] && keyHasBeenUp){
		player.tileX+=1;
		keyHasBeenUp = false;
	} else if (!keyPress[37] && !keyPress[38] && !keyPress[39] && !keyPress[40]){
		keyHasBeenUp = true;
	}

	//left
	if (keyPress[37] && keyHasBeenUp){
		player.tileX-=1;
		keyHasBeenUp = false;
	} else if (!keyPress[37] && !keyPress[38] && !keyPress[39] && !keyPress[40]){
		keyHasBeenUp = true;
	}

	//up
	if (keyPress[38] && keyHasBeenUp){
		player.tileY-=1;
		keyHasBeenUp = false;
	} else if (!keyPress[37] && !keyPress[38] && !keyPress[39] && !keyPress[40]){
		keyHasBeenUp = true;
	}	

	//down
	if (keyPress[40] && keyHasBeenUp){
		player.tileY+=1;
		keyHasBeenUp = false;
	} else if (!keyPress[37] && !keyPress[38] && !keyPress[39] && !keyPress[40]){
		keyHasBeenUp = true;
	}
}

function calculations(){
	playerX = (player.tileX*tileLength) + (1/2*tileLength);
	playerY = (player.tileY*tileLength) + (1/2*tileLength);
}

function graphics(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

	//grid
    ctx.strokeStyle = 'rgb(0,0,0)'
	ctx.lineWidth = 0.1;
    ctx.beginPath();
    for (var y = 0; y < mapLength; y++){
        for (var x = 0; x < mapLength; x++)
            ctx.rect(x * tileLength,y * tileLength,tileLength,tileLength);
    }
    ctx.stroke();
    ctx.closePath();

	//charictar
	ctx.fillStyle = player.color;
	ctx.beginPath();
	ctx.arc(playerX,playerY,player.radius,0,Math.PI*2,false)
	ctx.fill();
	ctx.closePath();
}

