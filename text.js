function Texto() {
    this.score = function (current_score) {
        let text_score = "Score: " + current_score;
        textSize(12);
        noStroke();
        fill(255);
        text(text_score, 10, 15);
    }
}