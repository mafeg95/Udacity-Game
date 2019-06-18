
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    this.x = ((this.x + (this.speed * dt))); // ?
    if (this.x > 505){
      this.x = this.x - 1500;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function() {
    this.x = 202;
    this.y = 380;
    this.sprite = 'images/char-pink-girl.png';
};

Player.prototype.update = function(direction) {
  if ((direction === "up") && this.y > 0){
    this.y = this.y - 83;
  } else if ((direction === "down") && this.y < 380) {
    this.y = this.y + 83;
  } else if ((direction === "left") && this.x > 0) {
    this.x = this.x - 101;
  } else if ((direction === "right") && this.x < 404) {
    this.x = this.x + 101;
  }
};

Player.prototype.handleInput = function(direction){
  this.update(direction);
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

let enemy1 = new Enemy(getRandomInt(-100, -800), 55, getRandomInt(100, 250));
let enemy2 = new Enemy(getRandomInt(-100, -800), 138, getRandomInt(100, 250));
let enemy3 = new Enemy(getRandomInt(-100, -800), 221, getRandomInt(100, 250));
let enemy4 = new Enemy(getRandomInt(-1500, -2000), 55, getRandomInt(250, 400));
let enemy5 = new Enemy(getRandomInt(-1500, -2000), 138, getRandomInt(250, 400));
let enemy6 = new Enemy(getRandomInt(-1500, -2000), 221, getRandomInt(250, 400));

let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

let player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
