
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = window.innerWidth - 30,
    height = window.innerHeight - 40,
    deltaV = 5,
    keys = [],
    friction = 0.8,
    x = [],
    y = [],
    player,
    Score = 0
    Color = 'rgb(0,0,0)';

    NewRound();

canvas.width = width;
canvas.height = height;

function update(){

    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX+=deltaV;
        }
    }
    if (keys[37]) {
        // left arrow
        if (player.velX > -player.speed) {
            player.velX-=deltaV;
        }
    }

    player.velX *= friction;


    player.x += player.velX;

    if (player.x >= width-player.width - 50) {
        player.x = width-player.width - 50;
    } else if (player.x <= 0) {
        player.x = 0;
    }



    ctx.clearRect(0,0,width,height);

//   ctx.fillStyle = 'rgb(255,0,0)';
//   ctx.fillRect(0,0, width/7,height);
  
//   ctx.fillStyle = 'rgb(255,150,0)';
//   ctx.fillRect(width/7,0, width/7*2,height);
  
//   ctx.fillStyle = 'rgb(255,255,0)';
//   ctx.fillRect(width/7*2,0, width/7*3,height);
  
//   ctx.fillStyle = 'rgb(0,255,0)';
//   ctx.fillRect(width/7*3,0, width/7*4,height);
  
//   ctx.fillStyle = 'rgb(0,255,255)';
//   ctx.fillRect(width/7*4,0, width/7*5,height);
  
//   ctx.fillStyle = 'rgb(0,0,255)';
//   ctx.fillRect(width/7*5,0, width/7*6,height);
  
//   ctx.fillStyle = 'rgb(255,0,255)';
//   ctx.fillRect(width/7*6,0, width,height);

  ctx.fillStyle = 'rgb(255,0,0)';
  ctx.fillRect(x[0],y[0], 5,20);
  ctx.fillRect(x[1],y[1], 5,20);
  ctx.fillRect(x[2],y[2], 5,20);
  ctx.fillRect(x[3],y[3], 5,20);
  ctx.fillRect(x[4],y[4], 5,20);
  ctx.fillRect(x[5],y[5], 5,20);
  ctx.fillRect(x[6],y[6], 5,20);

  ctx.fillStyle = Color;
  ctx.font = "20px serif";
  ctx.fillText("Score: " + Score, width - 100, 20);

  for (var i = 0; i < 7; i++){
    y[i] += 5;
  }

  for (var j = 0; j < 7; j++){
    if (y[j] > player.y && y[j] < player.y + 55 && x[j] > player.x && x[j] < player.x + 50){
        GameOver();
    }

    if (y[j] > height){
      y[j] = 0;
    }
  }


  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(player.x,player.y, player.width + 50, player.height + 50);

  ctx.fillStyle = 'rgb(255,215,0)';
  ctx.fillRect(width - 100, height/2 - 20, 20,20 );

  if (player.x > width - 100){
    Winner();
  }

  requestAnimationFrame(update);
}

//listens for key press
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

//means key can be pressed more than once
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

//refeshes function update();
window.addEventListener("load",function(){
    update();
});

function PressOff(){
    keys[39] = false;
    keys[37] = false;
}

function NewRound(){
  player = {
    x : width / 2 - 50,
    y : height / 2 - 50,
    width : 5,
    height : 5,
    speed: 3,
    velX: 0
  };

  PressOff();

  for (var i = 0; i< 7; i++){
    x[i] = width/7 * (i + 1);
    y[i] = 0;
  }

}

function Winner(){
  alert("Wou Win! you gain one point =D");
  Score += 1;
  if (Score > 0){
    Color = 'rgb(0,255,0)';
  } else if (Score == 0){
      Color = 'rgb(0,0,0)'
  }
  NewRound();
}

function GameOver(){
  alert("Game Over! you loose one point =C");
  Score -= 1;
  if (Score < 0){
    Color = 'rgb(255,0,0)';
  } else if (Score == 0){
      Color = 'rgb(0,0,0)'
  }
  NewRound();
}
