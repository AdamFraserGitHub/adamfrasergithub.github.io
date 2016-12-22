var blockType = [];

//normal block
blockType[0] = {
	x:	'placeholder',
	y:	'placeholder',
	width:	50,	
	height:	15,
	fillColor:	'rgb(150,150,150)',
	
	checkBoundry: function() {
        if (this.x <= charictar.x + charictar.width && charictar.x < this.x + this.width /2 && charictar.y + charictar.height > this.y){
			charictar.x = this.x - charictar.width; 
		}
		if (this.x + this.width > charictar.x && charictar.x >= this.x && charictar.y + charictar.height > this.y){
			charictar.x = this.x + this.width;
		}
		if (this.y <= charictar.y + charictar.height && charictar.x + charictar.width > this.x && charictar.x < this.x + this.width && charictar.vY >= 0){
			charictar.vY = 0;
			yBoundryActive[0] = true;
		} else {
			yBoundryActive[0] = false;
		}

    },

	drawBlock: function() {
		ctx.fillStyle = blockType[0].fillColor;
		ctx.fillRect(blockType[0].x,blockType[0].y,    blockType[0].width,blockType[0].height);
	}
};



//bouncy block
blockType[1] = {
	x:	'placeholder',
	y:	'placeholder',
	width:	50,	
	height:	15, 
	fillColor: 'rgb(255,0,255)',

	checkBoundry: function() {
		if (this.x <= charictar.x + charictar.width && charictar.x < this.x + this.width /2 && charictar.y + charictar.height > this.y){
			charictar.x = this.x - charictar.width; 
		}
		if (this.x + this.width > charictar.x && charictar.x >= this.x && charictar.y + charictar.height > this.y){
			charictar.x = this.x + this.width;
		}
		if (this.y <= charictar.y + charictar.height && charictar.x + charictar.width > this.x && charictar.x < this.x + this.width && charictar.vY >= 0){
			charictar.vY = 0;
			yBoundryActive[1] = true;
			charictar.jumpHeight = 12;
		} else {
			yBoundryActive[1] = false;
			charictar.jumpHeight = 6;
		}
	},

	drawBlock: function() {
		ctx.fillStyle = blockType[1].fillColor;
		ctx.fillRect(blockType[1].x,blockType[1].y,    blockType[1].width,blockType[1].height);
	}
}



//invisivle block
blockType[2] = {
	x: 'placeholder',
	y: 'placeholder',
	width: 50,
	height: 15,
	strokeColor: 'rgba(150,150,150,0.25)',
	strokeWeight: 1,

	checkBoundry: function() {
    	if (this.x <= charictar.x + charictar.width && charictar.x < this.x + this.width /2 && charictar.y + charictar.height > this.y){
			charictar.x = this.x - charictar.width; 
		}
		if (this.x + this.width > charictar.x && charictar.x >= this.x && charictar.y + charictar.height > this.y){
			charictar.x = this.x + this.width;
		}
		if (this.y <= charictar.y + charictar.height && charictar.x + charictar.width > this.x && charictar.x < this.x + this.width && charictar.vY >= 0){
			charictar.vY = 0;
			yBoundryActive[2] = true;
		} else {
			yBoundryActive[2] = false;
		}

    },

	drawBlock: function() {
		ctx.beginPath();
		ctx.strokeStyle = this.strokeColor;
		ctx.lineWidth = this.strokeWeight;
		ctx.rect(this.x,this.y,	this.width,this.height);
		ctx.stroke();
		ctx.closePath();
	}
}



//slimy block
blockType[3] = {
	x: 'placeholder',
	y: 'placeholder',
	width: 50,
	sinkDepth: 6,
	drawHeight: 21,
	fillColor: 'rgba(0,255,0,0.7)',

	checkBoundry: function() {
        if (this.x <= charictar.x + charictar.width && charictar.x < this.x + this.width /2 && charictar.y + charictar.height > this.y + this.sinkDepth){
			charictar.x = this.x - charictar.width; 
		}
		if (this.x + this.width > charictar.x && charictar.x >= this.x && charictar.y + charictar.height > this.y + this.sinkDepth){
			charictar.x = this.x + this.width;
		}
		if (this.y + this.sinkDepth <= charictar.y + charictar.height && charictar.x + charictar.width > this.x && charictar.x < this.x + this.width && charictar.vY >= 0){
			charictar.vY = 0;
			yBoundryActive[3] = true;
			charictar.jumpHeight = 3;
			charictar.speed = 1.5;
		} else {
			yBoundryActive[3] = false;

			charictar.speed = 6;
			if (yBoundryActive[1] == false){
				charictar.jumpHeight = 6;
			}
		}
	},

	drawBlock: function() {
		ctx.fillStyle = blockType[3].fillColor;
		ctx.fillRect(blockType[3].x,blockType[3].y,    blockType[3].width,blockType[3].drawHeight);
	}
};

//rainbow block
blockType[4] = {
	x:	'placeholder',
	y:	'placeholder',
	width:	50,	
	height:	15,
	fillColor:	'rgb(150,150,150)',
	
	checkBoundry: function() {
        if (this.x <= charictar.x + charictar.width && charictar.x < this.x + this.width /2 && charictar.y + charictar.height > this.y){
			charictar.x = this.x - charictar.width; 
		}
		if (this.x + this.width > charictar.x && charictar.x >= this.x && charictar.y + charictar.height > this.y){
			charictar.x = this.x + this.width;
		}
		if (this.y <= charictar.y + charictar.height && charictar.x + charictar.width > this.x && charictar.x < this.x + this.width && charictar.vY >= 0){
			charictar.vY = 0;
			yBoundryActive[4] = true;
			clearScreen = false;
		} else {
			yBoundryActive[4] = false;
			clearScreen = true;
		}

    },

	drawBlock: function() {
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.fillRect(blockType[4].x,blockType[4].y,		blockType[4].width/7,blockType[4].height);
		ctx.fillStyle = 'rgb(255,150,0)';
		ctx.fillRect(blockType[4].x + blockType[4].width/7,blockType[4].y,		blockType[4].width/7,blockType[4].height);
		ctx.fillStyle = 'rgb(255,255,0)';
		ctx.fillRect(blockType[4].x + blockType[4].width/7 * 2,blockType[4].y,		blockType[4].width/7,blockType[4].height);
		ctx.fillStyle = 'rgb(0,255,0)';
		ctx.fillRect(blockType[4].x + blockType[4].width/7 * 3,blockType[4].y,		blockType[4].width/7,blockType[4].height);
		ctx.fillStyle = 'rgb(0,255,255)';
		ctx.fillRect(blockType[4].x + blockType[4].width/7 * 4,blockType[4].y,		blockType[4].width/7,blockType[4].height);
		ctx.fillStyle = 'rgb(0,0,255)';
		ctx.fillRect(blockType[4].x + blockType[4].width/7 * 5,blockType[4].y,		blockType[4].width/7,blockType[4].height);
		ctx.fillStyle = 'rgb(255,0,255)';
		ctx.fillRect(blockType[4].x + blockType[4].width/7 * 6,blockType[4].y,		blockType[4].width/7,blockType[4].height);
	}
};

var charictarDraw = {
	rainbowSkin: function() {
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.fillRect(charictar.x,charictar.y,		charictar.width/7,charictar.height);
		ctx.fillStyle = 'rgb(255,150,0)';
		ctx.fillRect(charictar.x + charictar.width/7,charictar.y,		charictar.width/7,charictar.height);
		ctx.fillStyle = 'rgb(255,255,0)';
		ctx.fillRect(charictar.x + charictar.width/7 * 2,charictar.y,		charictar.width/7,charictar.height);
		ctx.fillStyle = 'rgb(0,255,0)';
		ctx.fillRect(charictar.x + charictar.width/7 * 3,charictar.y,		charictar.width/7,charictar.height);
		ctx.fillStyle = 'rgb(0,255,255)';
		ctx.fillRect(charictar.x + charictar.width/7 * 4,charictar.y,		charictar.width/7,charictar.height);
		ctx.fillStyle = 'rgb(0,0,255)';
		ctx.fillRect(charictar.x + charictar.width/7 * 5,charictar.y,		charictar.width/7,charictar.height);
		ctx.fillStyle = 'rgb(255,0,255)';
		ctx.fillRect(charictar.x + charictar.width/7 * 6,charictar.y,		charictar.width/7,charictar.height);
	}
}
