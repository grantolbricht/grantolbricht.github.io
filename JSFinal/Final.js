const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return 'rgb(255,255,255)';
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.number = random(0, 9);
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.number, this.x, this.y);
  }

  update() {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    if (this.y + this.size >= height || this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}

const balls = [];
const clickedBalls = [];
let shouldRunAnimation = true;

while (balls.length < 35) {
  const size = random(30, 50);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-3, 3),
    random(-3, 3),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

function loop() {
  if (!shouldRunAnimation) {
    return;
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  drawClickedNumbers();

  requestAnimationFrame(loop);
}

function handleClick(event) {
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;

  for (const ball of balls) {
    const distance = Math.sqrt((mouseX - ball.x) ** 2 + (mouseY - ball.y) ** 2);
    if (distance <= ball.size) {
      clickedBalls.push({
        x: ball.x,
        y: ball.y,
        number: ball.number,
      });

      // Redraw clicked numbers
      drawClickedNumbers();
    }
  }
}

function drawClickedNumbers() {
  const startIndex = Math.max(clickedBalls.length-10,0);

  for (let i = startIndex; i < clickedBalls.length; i++) {
    const clickedBall = clickedBalls[i];

    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const textX = width / 2 + (i-startIndex) * 30;
    const textY = 50;
    ctx.fillText(clickedBall.number, textX, textY);
  }
}

function clearClickedNumbers() {
  clickedBalls.length = 0; // Clear the array
  clearCanvas();
}

function clearCanvas() {
  ctx.clearRect(0, 0, width, height);

  drawClickedNumbers();
}

document.getElementById('clearButton').addEventListener('click', function() {
  shouldRunAnimation = false
  clearClickedNumbers();
  shouldRunAnimation = true;
});

canvas.addEventListener('click', handleClick);

loop();
