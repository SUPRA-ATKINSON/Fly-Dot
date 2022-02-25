var bird;
var pipes = [];
var colors = ["yellow", "blue", "lightgreen", "red", "orange", "violet"]
const bg = colors[Math.floor(Math.random()*colors.length)]
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
}

function draw() {


    background(bg)

    if (frameCount % 150 == 0) {
        pipes.push(new Pipe());
    }

    for (var pipe of pipes) {
        pipe.show();
        pipe.update();

        if (bird.touches(pipe)) {
            noLoop()
            console.log("GAME OVER")
        }

    }

    bird.show();
    bird.update();
  // put drawing code here
}

function keyPressed() {
    if (key == ' ') {
        bird.fly();
    }
}