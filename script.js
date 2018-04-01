var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var scrWidth = window.innerWidth;
var scrHeight = window.innerHeight;

canvas.width = scrWidth;
canvas.height = scrHeight;

// ctx.fillRect(0,0,100,100);

var tiles = ["rgb(255,0,150)", "rgb(225,225,225)", "rgb(255,0,0)"];

var tileMap = [[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,2,1,2,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,2,1,1,1,2,1,1,1,1],[1,1,1,2,2,2,2,2,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1]];

var player = {
  x: 5,
  y: 4
};

var keyCodes = [];

var tileWidth = scrWidth / 25;

function gameLoop() {

  keyManager();

  ctx.clearRect(0,0,scrWidth,scrHeight);
  drawBoard();
  drawPlayer();

  window.requestAnimationFrame(gameLoop);
}

var frameCounter = 0;
function keyManager() {

  if(frameCounter == 0) {

    //W or up
    if(tileMap[player.x][player.y - 1]) {
      if(keyCodes[87] || keyCodes[38] && tileMap[player.x][player.y - 1] != 2) {
        player.y --;
        frameCounter = 10;
      }
    }

    //A or left
    if(tileMap[player.x - 1]) {
      if(keyCodes[65] || keyCodes[37] && tileMap[player.x - 1][player.y] != 2) {
        player.x --;
        frameCounter = 10;
      }
    }

    //S or down
    if(tileMap[player.x][player.y + 1]) {
      if(keyCodes[83] || keyCodes[40] && tileMap[player.x][player.y + 1] != 2) {
        player.y ++;
        frameCounter = 10;
      }
    }

    //D or right
    if(tileMap[player.x + 1]){
      if(keyCodes[68] || keyCodes[39] && tileMap[player.x + 1][player.y] != 2) {
        player.x ++;
        frameCounter = 10;
      }
    }
  } else {
    frameCounter --;
  }
}



function drawPlayer() {
  ctx.fillStyle = 'rgb(0,255,0)';
  ctx.beginPath();
    ctx.arc(player.x * tileWidth + 1/2 * tileWidth, player.y * tileWidth + 1/2 * tileWidth, 25, 0, Math.PI * 2);
    ctx.fill();
  ctx.closePath();
}

function drawBoard() {
  for(var x = 0; x < tileMap.length; x++) {
    for(var y = 0; y < tileMap[x].length; y++) {
      ctx.fillStyle = tiles[tileMap[x][y]];
      ctx.fillRect(x * tileWidth, y * tileWidth, tileWidth + 1, tileWidth + 1);
    }
  }
}

window.addEventListener("keydown", function(e) {
  keyCodes[e.keyCode] = true;
});

window.addEventListener("keyup", function(e) {
  keyCodes[e.keyCode] = false;
});

gameLoop();
