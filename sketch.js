let ship;
let aliens = [];
let fire = [];
let n_aliens = 10;  // number of aliens per line
let n_aliens_lines = 4; // number of lines
let space_aliens = 50;  // space between aliens in px
let space_lines = 25;   // space between lines in px
let current_score = 0;
let current_live = 2;   // set current live
let max_lives = 3;  // set max lives

// Debugging
let aliens_move = true;

function setup() {
    createCanvas(600, 600);
    ship = new Ship();
    texto = new Texto();

    for(let j=0; j<n_aliens_lines; j++) {
        for(let i=0; i<n_aliens; i++) {
            aliens[i + j*n_aliens] = new Aliens(i*space_aliens+60, j*space_lines+40);  // y = 40    480 for debugging
        }
    }
}

function draw() {
    background(51);
    texto.score(current_score);
    ship.live(current_live, max_lives);
    ship.show();
    ship.move();

    for(let i=0; i<aliens.length; i++) {
        if(ship.hits(aliens[i])) {
            current_live--;
            console.log("Ja foste!");
        }
    }

    if(current_live == 0) {
        gameOver
    }

    for(let i=0; i<fire.length; i++) {
        fire[i].show();
        fire[i].move();
        for(let j=0; j<aliens.length; j++) {
            if(fire[i].hits(aliens[j])) {
                current_score++;
                aliens[j].eliminate();
                fire[i].eliminate();
            }
        }
    }

    let edge = false;
    for(let i=0; i<aliens.length; i++) {
        aliens[i].show();
        if(aliens_move){
            aliens[i].move();
        }
        if(aliens[i].x>width-10 || aliens[i].x<10) {
            edge = true;
        }
    }

    if(edge) {
        for(let i=0; i<aliens.length; i++) {
            aliens[i].shiftDown();
        }
    }

    for(let i=fire.length-1; i>=0; i--) {
        if(fire[i].flagRemove) {
            fire.splice(i, 1);
        }
    }

    for(let i=aliens.length-1; i>=0; i--) {
        if(aliens[i].flagRemove) {
            aliens.splice(i, 1);
        }
    }
}

function keyReleased() {
    if(key !== " ") {
        ship.setDir(0);
    }
}

function keyPressed() {
    if(key === " ") {
        let bullet = new Fire(ship.x-1, height-35);
        fire.push(bullet);
    }
    if(keyCode === RIGHT_ARROW || key === "D" || key === "d") {
        ship.setDir(1);
    } else if(keyCode === LEFT_ARROW || key === "A" || key === "a") {
        ship.setDir(-1);
    } else if(key === "R" || key === "r") {
        setup();
    } else if(key === "M" || key === "m") {     // Debugging
        if(aliens_move) {
            aliens_move = false;
        } else {
            aliens_move = true;
        }
    }
}

function gameOver() {

}