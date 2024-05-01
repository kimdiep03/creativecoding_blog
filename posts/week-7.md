---
title: Seventh Session
published_at: 2024-04-20
snippet: My seventh blog
disable_html_sanitization: true
---
# Learning
<div align="center">
    <iframe src="https://editor.p5js.org/kimnhudiep2003/full/HTvaCB8FH" width="100%" height="582px"></iframe>
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
  createCanvas(innerWidth, 1080/2);
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