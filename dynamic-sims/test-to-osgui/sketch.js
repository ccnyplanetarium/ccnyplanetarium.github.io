// in this sketch we're going to send the webcam to the shader, and then invert it's colors

// the shader variable



// the camera variable
let cam;
let dx=0;

let flock;
function setup() {
  // shaders require WEBGL mode to work

  //noStroke();
  frameRate(30)
createCanvas(1280,720)

  flock = new Flock();
  // Add an initial set of boids into the system
  for (let i = 0; i < 60; i++) {
    let b = new Boid(width / 2, height / 2);
    flock.addBoid(b);
  }
}

function draw() {
  // shader() sets the active shader with our shader
  //canvas.background('red')
  background(255);

  stroke('black')
  for ( i = 0; i < width; i += width/4) {
    line(i, 0, i, height);
  }
  for ( i = 0; i < height; i += height/4) {
    line(0, i, width, i );
  }
  noFill()
stroke("red")
  circle(width/2,height/2,10)
  for ( i = 0; i < 20; i += 1) {
    circle(width/2,height/2, i*50 );
  }
  flock.run();
  //box(50)
  // lets just send the cam to our shader as a uniform
  //image(sg, -width/2,-height/2);

  // rect gives us some geometry on the screen
  dx += .01;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
