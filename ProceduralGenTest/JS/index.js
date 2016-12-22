var charictar, ground,
    ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("Canvas"),
    scrWidth = window.innerWidth,
    scrHeight = window.innerHeight,
    keyPress = [],
    Score = 0,
	Gravity = 1,
	gameStart = false,
	yBoundryActive = [],
	clearScreen = true,
	debugPanel = false;

	document.addEventListener('mousemove', funFunction, false);

	//charictar properties
	charictar = {
		width:	10,
		height:	10,
		x:	scrWidth /10,
		y:	scrHeight /2 -10 , //10 = charictar.height
		fillColor:	'rgb(255,225,25)',
		speed:	6,
		jumpHeight:	6,
		vX:	0,
		vY:	0
	};

	//ground properties
	ground = {
		height: scrHeight /2,
		width: 2,
		fillColor: 'rgb(0,0,0)',
	};

	setInterval(timer,	1000/30); 
	
	function timer(){
		dynamicDeclerations();
		draw();
		controller();
		boundryChecker();
		physics();
	}

	function dynamicDeclerations(){

		if (canvas.width != window.innerWidth || canvas.height != window.innerHeight){
			//updates scrWidth + scrHeight variables so game scale can change dynamicly
			scrWidth = window.innerWidth;
    		scrHeight = window.innerHeight;
		
			//reasigns canvas size
			canvas.width = scrWidth
			canvas.height = scrHeight
		}
	}

	function draw(){

		// clears the screen so last frame doesnt stay while adhering to the rainbow block effect
		//(will find a better way to implement this cuz this is shite)
		if (clearScreen){
			ctx.clearRect(0,0,	scrWidth,scrHeight);
		} else if (!clearScreen){
			ctx.clearRect(0,0,	charictar.x - 20,charictar.y + charictar.height);
			ctx.clearRect(0,charictar.y + charictar.height,	charictar.x,scrHeight);
			ctx.clearRect(charictar.x, 0,	scrWidth - charictar.x,charictar.y + charictar.height);
			ctx.clearRect(charictar.x, charictar.y + charictar.height,	scrWidth - charictar.x, scrHeight - (charictar.y - charictar.height));

		}

		//Draw charictar
		if (yBoundryActive[4]){
			charictarDraw.rainbowSkin();
		} else {
			ctx.fillStyle = charictar.fillColor;
			ctx.fillRect(charictar.x,charictar.y,	charictar.width,charictar.height);
		}

		//Draw ground
		ctx.fillStyle = ground.fillColor;
		ctx.fillRect(0,ground.height,	scrWidth,ground.width);

		if (debugPanel){
			panel();
		}

		ctx.beginPath();
ctx.fillStyle = 'rgb(0,255,0)';
for (var i = 1; i < counter; i++){
    ctx.rect(blockValues[0][i],blockValues[1][i] * 300 - 15,50,15);
}
ctx.fill();
ctx.closePath();

	}


	function controller(){
		//left
		if (keyPress[37]){
			charictar.x -= charictar.speed;
		}

		//right
		if (keyPress[39]){
			charictar.x += charictar.speed;
		}

		//up
		if (keyPress[38] && charictar.y == ground.height - charictar.height){
			charictar.vY = -charictar.jumpHeight;
			gameStart = true;	
			}
		for(var i = 0; i < 5; i++){
			if (keyPress[38] && yBoundryActive[i] == true){
			charictar.vY = -charictar.jumpHeight;
			}
		}
	}


	function boundryChecker(){
	}


	function physics(){

		if (charictar.y <= ground.height - charictar.height){
			charictar.y += charictar.vY;
		}

		if (charictar.vY != 0){
			charictar.vY += Gravity;
		} 

		if (charictar.y >= ground.height -charictar.height){
			charictar.y = scrHeight/2 - charictar.height;
			charictar.vY = 0;
		} else if (charictar.vY == 0 && gameStart == true && charictar.y < (scrHeight/2 + charictar.y)){
			charictar.vY += Gravity;
		}

	}


//handles key presses
//presses key
document.body.addEventListener("keydown", function(e) {
	keyPress[e.keyCode] = true;
});

//stops pressing key
document.body.addEventListener("keyup", function(e) {
	keyPress[e.keyCode] = false;
});

function keyPressOff(){
	keyPress[39] = false;
	keyPress[37] = false;
	keyPress[38] = false;
}

function funFunction(){
	var mouseX = event.clientX;
    var mouseY = event.clientY;
	if (mouseX > scrWidth - 120 && mouseY < 60){
		debugPanel = true;
	} else {
		debugPanel = false;
	}
}
