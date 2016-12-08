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
			// charictar.y = this.y - charictar.height;
			charictar.vY = 0;
			yBoundryActive[0] = true;
		} else {
			yBoundryActive[0] = false;
		}

    }
};



//bounce block
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
	}
}



//invisivle block
blockType[2] = {
	x: 'placeholder',
	y: 'placeholder',
	width: 50,
	height: 15,
	strokeColor: 'rgba(150,150,150,0.2)',
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

    }
}



//sticky block
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
	}
}