function Ship() {
    this.x = width / 2;
    this.y = height-25;
    this.h = 10;
    this.xdir = 0;

    this.show = function() {
        strokeWeight(1);
        stroke(20);
        fill(255);
        triangle(this.x-10, height-5, this.x+10, height-5, this.x, this.y);

        if(this.x+10 == width) {
            this.x = 10;
        } else if(this.x == 10) {
            this.x = width-10;
        }
    }

    this.hits = function(enemy) {
        let d = dist(this.x, this.y, enemy.x, enemy.y);
        if(d<this.h + ((enemy.r/2)-1)) {
            return true;
        } else {
            return false;
        }
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    this.move = function(dir) {
        this.x += this.xdir*5;
    }

    this.live = function(current_live, max_lives) {
        let lost_live = max_lives - current_live;

        // Display Lives
        textSize(12);
        noStroke();
        fill(255);
        text("Lives: ", width-100, 15);
        for(let i=0; i<current_live; i++) {
            strokeWeight(1);
            stroke('rgba(20,20,20, 1)');
            fill('rgba(255,255,255, 1)');
            triangle(i*15+width-60, 17, i*15+width-50, 17, i*15+width-55, 7);
        }
        for(let i=0; i<lost_live; i++) {
            strokeWeight(1);
            stroke('rgba(20,20,20, 0.3)');
            fill('rgba(255,255,255, 0.3)');
            triangle(width-30-i*15, 17, width-20-i*15, 17, width-25-i*15, 7);
        }
    }
}