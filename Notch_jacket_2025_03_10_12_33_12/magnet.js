let textMagnets = ["hello", "can", "you", "hear", "me"]



class Magnet {
  constructor() {
    this.t = random(textMagnets);
    this.x = random(width);
    this.y = random(height);
    this.angle = random(TWO_PI);
  
    this.bbox = font.textBounds(this.t , this.x, this.y, size);
    this.pos = createVector(this.bbox.x, this.bbox.y);
    this.w = this.bbox.w;
    this.h = this.bbox.h;
    this.c = color(255);
    
  }
  
  display(){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.c)
    rect(0, 0, this.w, this.h);

    fill(0);
    stroke;
    textFont(font);
    textSize(size/3)
    textAlign(CENTER, CENTER);
    text(this.t,0, 0);
    pop();
    
    fill(255, 0, 0)
    ellipse(this.fingerx, this.fingery, 10,10)
  }
  
  touch(thumbx,thumby, indexx, indexy){
    let distBetweenFingers = dist(thumbx,thumby, indexx, indexy);
    this.fingerx = abs(thumbx - indexx) + min(thumbx, indexx);
    this.fingery = abs(thumby - indexy) + min(thumby, indexy);
    
    let distFromFingers = dist(this.pos.x, this.pos.y, this.fingerx, this.fingery);
    
    this.fingerx = abs(thumbx - indexx) + min(thumbx, indexx);
    this.fingery = abs(thumby - indexy) + min(thumby, indexy);
    
    if (distBetweenFingers < 40 && distFromFingers < this.w/2){
      this.c = color(255,0,0);
      this.pos.x = this.fingerx;
      this.pos.y = this.fingery;
    } else {
      this.c = color(255);
    }
      
  }
}