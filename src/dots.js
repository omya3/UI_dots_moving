export default class Dots {
  constructor(s_height, s_width) {
    this.life = 150;
    this.max_speed = 4;
    this.radius = 2;
    this.a = 255;
    this.speed = {
      x:
        Math.floor(Math.random() * (this.max_speed - 0 + 1)) -
        this.max_speed / 2,
      y:
        Math.floor(Math.random() * (this.max_speed - 0 + 1)) -
        this.max_speed / 2
    };
    this.height = s_height;
    this.width = s_width;
    this.position = {
      x: Math.floor(Math.random() * (this.width - 0 + 1)) + 0,
      y: Math.floor(Math.random() * (this.height - 0 + 1)) + 0
    };
  }

  update() {
    this.speed.x =
      Math.floor(Math.random() * (this.max_speed - 0 + 1)) - this.max_speed / 2;
    this.speed.y =
      Math.floor(Math.random() * (this.max_speed - 0 + 1)) - this.max_speed / 2;
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.globalAlpha = this.a;
    ctx.fillStyle = "rgb(" + this.position.x + ",0 ," + this.position.y + ")";
    //noStroke();
    //ctx.stroke();
    ctx.fill();
  }

  reset(target_x, target_y) {
    this.position.x = target_x;
    this.position.y = target_y;
    this.life = 150;
    this.a = 255;
  }
}
