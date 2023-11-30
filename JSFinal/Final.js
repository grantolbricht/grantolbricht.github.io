// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.number = random(0,9);
  }

draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = 'black'; // You can adjust the color of the text
  ctx.font = '16px Arial'; // You can adjust the font size and type
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(this.number, this.x, this.y);
  } 
  
  update() {
    //this handles right edge of the screen
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  //this handles left side of screen
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  //this handles bottom of screen
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  //this handles top of screen
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(30, 50);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    'RGB(255,255,255)',
    size,
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  requestAnimationFrame(loop);
}

loop();