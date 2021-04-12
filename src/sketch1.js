import Dots from "/src/dots.js";
let canvas = document.getElementById("steve");
let ctx = canvas.getContext("2d");

let dots = [];

const height = 600;
const width = 1200;
var particle_index = 0;

for (var i = 0; i < 100; i++) {
  let d = new Dots(height, width);
  dots.push(d);
}

function doit(event) {
  var particle = dots[particle_index];
  var targetX = event.offsetX;
  var targetY = event.offsetY;
  particle.reset(targetX, targetY);
  particle_index++;
  if (particle_index >= 100) {
    particle_index = 0;
  }
}

document.getElementById("steve").onmousemove = doit;

function slate() {
  //ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  for (var i = 0; i < 100; i++) {
    dots[i].life--;
    if (dots[i].life < 50) {
      dots[i].update();
      dots[i].a = 255 * (dots[i].life / 50);
    }
  }

  for (var i = 0; i < 100; i++) {
    dots[i].draw(ctx);
  }
  requestAnimationFrame(slate);
}

requestAnimationFrame(slate);
