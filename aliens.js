function Aliens(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.flagRemove = false;

    this.xdir = 1;

    this.show = function() {
        strokeWeight(1);
        stroke(20);
        fill(137, 255, 154);
        polygon(this.x, this.y, this.r*2, 6);
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.shiftDown = function () {
        this.xdir *= -1;
        this.y += this.r;
    }

    this.eliminate = function () {
        this.flagRemove = true;
    }
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }