var charictar, ground, obstacle,
    ctx = Canvas.getContext("2d"),
	canvas = document.getElementById("canvas"),
    scrWidth = window.innerWidth - 20,
    scrHeight = window.innerHeight - 20,
    keyPress = [],
    Score = 0,
	Gravity = 0.5;

	document.getElementById("Canvas").width = scrWidth
	document.getElementById("Canvas").height = scrHeight

	//charictar properties
	charictar = {
		width:	10,
		height:	10,
		x:	50,
		y:	scrHeight /2 -10 , //10 = charictar.height
		color:	'rgb(0,100,255)',
		speed:	2.5,
		jumpHeight:	200,
		vX:	0,
		vY:	0
	};

	//obstacle properties
	obstacle = {
		x:	scrWidth/2 - 50,
		y:	scrHeight/2 - 15,
		width:	50,
		height:	15,
		color:	'rgb(255,0,0)',
	};


	//ground properties
	ground = {
		height: scrHeight /2,
		width: 2,
		color: 'rgb(0,0,0)',
	};

	setInterval(timer,	1000/60); 
	
	function timer(){
		draw();
		controller();
		boundryChecker();
		physics();
	}


	function draw(){
		ctx.clearRect(0,0,	scrWidth,scrHeight);

		//Draw charictar
		ctx.fillStyle = charictar.color;
		ctx.fillRect(charictar.x,charictar.y,	charictar.width,charictar.height);

		//Draw ground
		ctx.fillStyle = ground.color;
		ctx.fillRect(0,ground.height,	scrWidth,ground.width);

		//Draw obstacle
		ctx.fillStyle = obstacle.color;
		ctx.fillRect(obstacle.x,obstacle.y,    obstacle.width,obstacle.height);

		ctx.fillStyle = 'rgb(0,0,0)';
  		ctx.font = "20px serif";
  		ctx.fillText(charictar.vY, scrWidth - 100, 20);
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
		if (keyPress[38]){
			charictar.vY = -charictar.jumpHeight;
			
		}

	}


	function boundryChecker(){
		if (charictar.x + charictar.width >= obstacle.x && charictar.y + charictar.height >= obstacle.y){
			charictar.x = obstacle.x - charictar.width;
		}
	}


	function physics(){
		charictar.y += charictar.vY;

		if (charictar.vY < 0){
			charictar.vy += 0.5;
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
