function panel(){
    	ctx.fillStyle = 'rgb(0,0,0)';
  		ctx.font = "10px serif";
  		ctx.fillText("y-Velocity: " + charictar.vY, scrWidth - 120, 10);
		ctx.fillText("y position: " + charictar.y,	scrWidth - 120, 20);
		ctx.fillText("scrHeight: " + scrHeight/2,	scrWidth - 120, 30);
		ctx.fillText("up key: " + keyPress[38],	scrWidth - 120, 40);
        ctx.fillText("slimy y-boundry: " + yBoundryActive[3], scrWidth - 120, 50);
        ctx.fillText("rainbow y-boundry: " + yBoundryActive[4], scrWidth - 120, 60);
}
