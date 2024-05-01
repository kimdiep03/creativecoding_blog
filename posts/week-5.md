---
title: Fifth Session
published_at: 2024-04-05
snippet: My fifth blog
disable_html_sanitization: true
---
# Learning
<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/u0hPqYoP9" width="400px" height="442px"></iframe>
</div>

```html
<script>
    let w, h;
let col, s, b;

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  drawingContext.filter = 'blur(150px)';
  drawRect(0, 0, width, height, 10, 90, 100);
  drawRect(0, -25, width, 50, 310, 90, 90);
  drawRect(0, height, width + 10, 50, 310, 90, 100);

}

function drawRect(x, y, w, h, col, s, b) {
  // drawingContext.filter = 'blur(150px)';
  fill(col, s, b);
  rect(x, y, w, h);
}
</script>
```

<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/qj8UCevv3" width="600px" height="742px"></iframe>
</div>

```html
<script>
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(220);
}

function draw() {
  frameRate(5);
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
  
  // drawCircle(200, 230, 50, 0, 80, 80);
  drawCircle(70, 70, 0, 5, 30, 20);
  drawCircle(70, 70, 0, 5, 20, 10);

}

function drawCircle(col1, col2, s1, s2, b1, b2) {
    //random();
  let x = random(width);
  let y = random(height);
  
  drawingContext.filter = 'blur(30px)';
  fill(col1, s1, b1);
  ellipse(x, y, width*4/5, width*4/5);
  
  drawingContext.filter = 'blur(0px)';
  fill(col2, s2, b2);
  ellipse(x, y, width*3.5/5, width*3.5/5);
  
}
</script>
```
<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/HTvaCB8FH" width="600px" height="542px"></iframe>
</div>

```html
<script>
    //code from: https://www.youtube.com/watch?v=nYI5TOWXJEM&t=24s
var x = 0, y = 0;
var xStep = 50;
var yStep = 120;
var a = 0, a_ = 0;
var num = 320;

function setup(){
  createCanvas(1920, 1080);
  num = Math.floor((width/xStep)*(height/yStep));
}

function draw(){
  background(15, 20, 30);
  strokeCap(SQUARE);
  strokeWeight(xStep);
  
  var n = 0;
  while (n<num) {
  stroke(255-255*cos(radians(a)),255*cos(radians(a)),255-255*sin(radians(a)),255-255*sin(radians(a)));
  line(x, y, x, y+yStep);
  x+=xStep;
  if (x>width) {
    x = xStep/2;
    y+=yStep;
  }
  if (y>height) {
    y=0;
    a=0;
   }
    n++;
    a+=a_;
  }
  a_+=0.1;
}
</script>
```

<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/Y5DSYx_ms" width="600px" height="592px"></iframe>
</div>

```html
<script>
    let x, y;
let count = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(220);
  colorMode(HSB);
}

function draw() {
  // x = mouseX;
  // y = mouseY;
  x = width/2;
  y = height/2;
  
  drawingContext.filter = 'blur(200px)';
  rectMode(CENTER);
  noStroke();
  frameRate(2);
  
  let colorX = map(x, 0, width, 0, 360);
  let colorY = map(y, 0, height, 0, 100);
  
  // count+=0.1;
  
  // stroke(colorX, colorY, 0);
  // line(x-20, y, x+20, y);
  
  // translate(width/2, height/2);
  // rotate(count);
  // noStroke();
  // rect(0, 0, 50, 50); //xpos, ypos for translate
  
  x = random(0, width);
  y = random(0, height);
  d = (random(width/4, width))
  
  colRect();
  //greyRect();
}

function greyRect() {
  fill(random(100, 250), 0, random(0, 100));
  // fill(colorX, 70, colorY);
  rect(x, y, d, d);
}

function colRect() {
  fill(random(360), 90, random(90, 100));
  // fill(colorX, 70, colorY);
  rect(x, y, d, d);
} 
</script>
```