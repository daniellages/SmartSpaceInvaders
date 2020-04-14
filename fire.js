function Fire(x, y) {
    this.x = x;
    this.y = y;
    this.h = 10;
    this.flagRemove = false;

    this.show = function() {
        noStroke();
        fill(255, 0, 255);
        rect(this.x, this.y, 2, this.h);
    }

    this.hits = function(enemy) {
        let d = dist(this.x, this.y, enemy.x, enemy.y);
        if(d<this.h + ((enemy.r/2)-1)) {
            return true;
        } else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y-6;
    }

    this.eliminate = function () {
        this.flagRemove = true;
    }
}
