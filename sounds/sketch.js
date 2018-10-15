// Adapted from Learning Processing by Daniel Shiffman
// http://www.learningprocessing.com
// Doorbell sample by Corsica_S via freesound.org,
// Creative Commons BY 3.0

// A sound file object
var dingdong;
var thus;
// A doorbell object (that will trigger the sound)
var doorbell;
function preload() {
  dingdong = loadSound('assets/doorbell-1.mp3');
  thus = loadSound('assets/Also_Sprach_Zarathustra.ogg')
}
function setup() {
  createCanvas(400, 200);

  // Load the sound file.
  // We have included both an MP3 and an OGG version.
  soundFormats('mp3', 'ogg');

  // Create a new doorbell
  doorbell = new Doorbell(width/2, height/2, 64,'doorbell',dingdong);
  also = new Doorbell(width/2+100, height/2, 64,'Also',thus);

}

function draw() {
  background(255);
  // Show the doorbell
  doorbell.display(mouseX, mouseY);
  also.display(mouseX,mouseY)
}

function mousePressed() {
  // If the user clicks on the doorbell, play the sound!
  if (doorbell.contains(mouseX, mouseY)) {
    doorbell.clicked();
  }
  else if (also.contains(mouseX, mouseY)) {
    also.clicked();
  }
}

// A Class to describe a "doorbell" (really a button)
var Doorbell = function(x_, y_, r_, label_,sound_) {
  // Location and size
  this.x = x_;
  this.y = y_;
  this.r = r_;
  this.label = label_;
  this.sound = sound_;
  this.playing = false;

  // Is a point inside the doorbell? (used for mouse rollover, etc.)
  this.contains = function(mx, my) {
    if (dist(mx, my, this.x, this.y) < this.r) {
      return true;
    } else {
      return false;
    }
  };

  // Show the doorbell (hardcoded colors, could be improved)
  this.display = function(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r);
    push()
    noStroke()
    fill(0)
    text(this.label,this.x-20,this.y+50)
    pop()
  };
  this.clicked = function(){
    if (this.playing == false){
    this.sound.play()
    this.playing = true;
  }
  else if (this.playing == true){
    this.sound.stop()
    this.playing = false;
  }
  };
};
