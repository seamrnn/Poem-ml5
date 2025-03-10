let font;
let size = 35;
let magnets = [];
let num = 5;
let video;
let handPose;
let hands = [];

function preload(){
  font = loadFont("GT-Cinetype-Mono.ttf");
  handPose = ml5.handPose({flipped: true});
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, {flipped: true});
  video.hide();
  handPose.detectStart(video, gotHands);
  
  
  rectMode(CENTER);
  for (let i = 0; i<num; i++){
    magnets[i] = new Magnet()
  }
}

function draw() {
  background(220);
  
  image(video, 0, 0, width, height);
  if (hands.length > 0){
    let index = hands[0].keypoints[8];
    let thumb = hands[0].keypoints[4];
    
    noFill();
    stroke(0, 255, 0);
    text("index", index.x, index.y);
    text("thumb", thumb.x, thumb.y); 
  
  
  for ( let i = 0; i<num; i++) {
  magnets[i].touch(thumb.x, thumb.y, index.x, index.y );
  magnets[i].display();
  }
 }
}

function gotHands(results) {
  hands = results;
}