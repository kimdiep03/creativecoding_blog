---
title: Sixth Session
published_at: 2024-04-17
snippet: My sixth blog
disable_html_sanitization: true
---
# Learning
<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/5cZUOL_R0" width="320px" height="282px"></iframe>
</div>

```html
<script>
   //code from: https://youtu.be/1GfKfjgf4cQ?si=VqbvGJrYa6mdejQi
let video; let w = 320; let h = 240;
let t; let x, y;

let alphabets = ["🌈", "🩵", "✨", "⭐", "💜", "💕", "🧡", "🤍", "☁️", "🍒", "⛱️", "🍅", "🌽", "🥕", "🍄", "💧", "🌸", "🪿", "🫖", "🏄🏻‍♀️", "🧚🏻‍♀️", "✌️", "🦦", "❄️", "🌺", "🦋"];
let letters = [];
let num = 20;
let thresholdVal = 0.2;

function setup() {
  createCanvas(w, h);
  video = createCapture(VIDEO);
  video.hide();
  video.size(w, h);
  
  for (let i = 0; i < num; i++) {
    let x = width/num * i;
    let y = 1;
    letters[i] = new Letter(x, y);  
  }
  
}

function draw() {
  
  image(video, 0, 0);
  //filter(THRESHOLD, thresholdVal);
  for (let i = 0; i < num; i++) {
    letters[i].update();
    letters[i].display();  
  }
  
} 
</script>
```

<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/j9ywoR7ow" width="320px" height="282px"></iframe>
</div>

```html
<script>
   let video;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240)
  video.hide()
  noStroke()
   
}

function draw() {
  tint(255, 0, 250);
  drawingContext.globalAlpha = 0.05
  image(video, 0, 0, mouseX, mouseY);
  

}
</script>
```
<div align="center">
   <iframe src="https://editor.p5js.org/kimnhudiep2003/full/DQWZnbFrs" width="400px" height="442px"></iframe>
</div>

```html 
<script>
   function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  //background(220);
  
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width)*5;
      pixels[index+0] = x;
      pixels[index+1] = random(0);
      pixels[index+2] = y;
      pixels[index+3] = 100;
      pixels[index+4] = 200;
    }
  }
  updatePixels();
}
</script>
```

<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/9vHZgfMn1" width="600px" height="542px"></iframe>
</div>

```html
<script>
   //follow: https://youtu.be/JRUEnFShfRc?si=NZrp9lI3m1J4r4-U

let x = 0;
let y = 0;
let sizer = 20;
let r;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(2);
  colorMode(HSB);
}

function draw() {
  background(0);
  

  for (let i = 0; i < width; i += sizer) {
    for (let j = 0; j < height; j += sizer) {
      r = random(2);
      if (r < 1) {
        fill(random(200, 50), y + j / 2, 90);
        rect(x + i, y + j, sizer, sizer);
      } else {
        fill(random(300, 360), random(60, 100), 90);
        ellipse(x + i + sizer / 2, y + j + sizer / 2, sizer, sizer);
      }
    }
  }
}
</script>
```
<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/J6OtfQFbV" width="400px" height="442px"></iframe>
</div>

```html
<script>
    let sizer = 50;
let change = 100;
let x;

function setup() {
  createCanvas(400, 400);
  background(0);
  rectMode(CENTER)
  colorMode(HSB);
}

function draw() {
  noStroke();
  x = 0;
  
  //if mouse is in the upper left corner
  if (mouseX < width/2 && mouseY<height/2) {
    fill(320, 100, 100, 50);
    glowingCircle(mouseX, mouseY, sizer, sizer);
  }
  
  //if mouse is in the upper right corner
  else if (mouseX>width/2 && mouseY<height/2){
    fill(200, 100, 100);
    glowingCircle(mouseX, mouseY, sizer, sizer)
  }
  //if mouse is in the lower left corner
    else if (mouseX<width/2 && mouseY>height/2){
    fill(130, 100, 100);
    glowingRect(mouseX, mouseY, sizer, sizer)
  }
  //if mouse is in the lower right corner
    else if (mouseX>width/2 && mouseY>height/2){
    fill(50, 100, 100);
    glowingRect(mouseX, mouseY, sizer, sizer)
  }
}

function glowingRect(x, y, w, h) {
  drawingContext.filter = 'blur(0px)';
  rect(x, y, w, h);
  
  drawingContext.filter = 'blur(10px)';
  fill(150, 10, 100, 50);
  rect(x, y, w, h);
}

function glowingCircle(x, y, w, h) {
  drawingContext.filter = 'blur(0px)';
  ellipse(x, y, w, h);
  
  drawingContext.filter = 'blur(10px)';
  fill(150, 10, 100, 50);
  ellipse(x, y, w, h);
}
</script>
```

# Homework

**Three.js**
<canvas id="threejs_example"></canvas>

<script type="module">
    // getting canvas element
    const cnv = document.getElementById (`threejs_example`)
    
    // sizing size
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    // setting background colour
   cnv.style.backgroundColor = `magenta`

  //  // import scene
  //  import * as THREE from 'three';

  //  const scene = new THREE.Scene();

  //  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

  //  const renderer = new THREE.WebGLRenderer({
  //   canvas: document.querySelector('#bg'),
  //  });

  //  renderer.setPixelRatio();
  //  renderer.setSize(window.innerWidth, window.innerHeight);
  //  camera.position.setZ(30);

  //  renderer.render(scene, camera);

  //  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  //  const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
  //  const torus = new THREE.Mesh(geometry, material);

  //  scene.add(torus)

  //  function animate() {
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera)
  //  }
</script>

<br>

**c2.js**

