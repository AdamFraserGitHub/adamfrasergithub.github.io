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
	clearScreen = true;

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

	blockType[0].x = scrWidth/6 -blockType[0].width;
	blockType[0].y = scrHeight/2 - blockType[0].height;

	blockType[1].x = scrWidth/6 + 60  -blockType[1].width
	blockType[1].y = scrHeight/2 - blockType[1].height;

	blockType[2].x = scrWidth/6 + 120 -blockType[2].width;
	blockType[2].y = scrHeight/2 - blockType[2].height;

	blockType[3].x = scrWidth/6 + 180 -blockType[3].width;
	blockType[3].y = scrHeight/2 - blockType[3].drawHeight;

	blockType[4].x = scrWidth/6 + 240 -blockType[4].width;
	blockType[4].y = scrHeight/2 - blockType[4].height;

	//ground properties
	ground = {
		height: scrHeight /2,
		width: 2,
		fillColor: 'rgb(0,0,0)',
	};

	// canvas.imageSmoothingEnabled = false;


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

		blockType[0].drawBlock(); //Draw normal block
		blockType[1].drawBlock(); //Draw bouncy block
		blockType[2].drawBlock(); //Draw invisible block																								
		blockType[3].drawBlock(); //Draw slimy block
		blockType[4].drawBlock(); //Draw rainbow block

		panel(); //debug panel

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
		blockType[0].checkBoundry(); //Check normal block boundry
		blockType[1].checkBoundry(); //Check bouncy block boundry
		blockType[2].checkBoundry(); //Check invisible block boundry
		blockType[3].checkBoundry(); //Check slimy block boundry
		blockType[4].checkBoundry(); //Check rainbow block boundry
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