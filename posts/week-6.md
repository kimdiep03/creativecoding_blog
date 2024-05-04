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
## 1. Three.js library

Code from [link](https://hofk.de/main/discourse.threejs/2023/TwistedTorusParametric/TwistedTorusParametric.html)

<div id="three_container"></div>

<script type="module">

// @author PavelBoytchev

import * as THREE from '/scripts/three/three.module.js';
import { ParametricGeometry } from '/scripts/three/ParametricGeometry.js';
import { OrbitControls } from '/scripts/three/OrbitControls.js'

// general setup, boring, skip to the next comment

// Adjust the canvas size 
const div = document.getElementById (`three_container`)
const w = div.parentNode.scrollWidth
const h = w * 9/16

console.clear( );

var scene = new THREE.Scene();
    scene.background = new THREE.Color( 'gainsboro' );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
    camera.position.set( 0, 0, 25 );
    camera.lookAt( scene.position );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( w, h );
    renderer.setAnimationLoop( animationLoop );
    div.appendChild( renderer.domElement );
			
// window.addEventListener( "resize", (event) => {
//     camera.aspect = innerWidth/innerHeight;
//     camera.updateProjectionMatrix( );
//     renderer.setSize( innerWidth, innerHeight );
// });

var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
		controls.autoRotate = true;

var ambientLight = new THREE.AmbientLight( 'white', 0.5 );
    //scene.add( ambientLight );

var light = new THREE.DirectionalLight( 'white', 3 );
    light.position.set( 1, 1, 1 );
    scene.add( light );


// next comment

function surface( u, v, target )
{
		const n = 10,  // larger values make sharper square
					t = 1.5; // larger values make more twists
	
		u *= 2*Math.PI;
		v *= 2*Math.PI;
	
		var r = (Math.cos(v)**n + Math.sin(v)**n)**(-1/n),
				x = (4+r*Math.cos(v+t*u)) * Math.cos(u),
				y = (4+r*Math.cos(v+t*u)) * Math.sin(u),
				z = r*Math.sin(v+t*u);
	
  	target.set( x, y, z );
}


const geometry = new ParametricGeometry(surface, 100, 100);


var object = new THREE.Mesh(
			geometry,
			new THREE.MeshNormalMaterial(),
    );	
		scene.add( object );



function animationLoop( t )
{
   object.rotation.z = t/2700;

    controls.update( );
		light.position.copy( camera.position );
    renderer.render( scene, camera );
}

</script>

```html

<div id="three_container"></div>

<script type="module">

// @author PavelBoytchev

import * as THREE from '/scripts/three/three.module.js';
import { ParametricGeometry } from '/scripts/three/ParametricGeometry.js';
import { OrbitControls } from '/scripts/three/OrbitControls.js'

// general setup, boring, skip to the next comment

// Adjust the canvas size 
const div = document.getElementById (`three_container`)
const w = div.parentNode.scrollWidth
const h = w * 9/16

console.clear( );

var scene = new THREE.Scene();
    scene.background = new THREE.Color( 'gainsboro' );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
    camera.position.set( 0, 0, 25 );
    camera.lookAt( scene.position );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( w, h );
    renderer.setAnimationLoop( animationLoop );
    div.appendChild( renderer.domElement );
			
// window.addEventListener( "resize", (event) => {
//     camera.aspect = innerWidth/innerHeight;
//     camera.updateProjectionMatrix( );
//     renderer.setSize( innerWidth, innerHeight );
// });

var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
		controls.autoRotate = true;

var ambientLight = new THREE.AmbientLight( 'white', 0.5 );
    //scene.add( ambientLight );

var light = new THREE.DirectionalLight( 'white', 3 );
    light.position.set( 1, 1, 1 );
    scene.add( light );


// next comment

function surface( u, v, target )
{
		const n = 10,  // larger values make sharper square
					t = 1.5; // larger values make more twists
	
		u *= 2*Math.PI;
		v *= 2*Math.PI;
	
		var r = (Math.cos(v)**n + Math.sin(v)**n)**(-1/n),
				x = (4+r*Math.cos(v+t*u)) * Math.cos(u),
				y = (4+r*Math.cos(v+t*u)) * Math.sin(u),
				z = r*Math.sin(v+t*u);
	
  	target.set( x, y, z );
}


const geometry = new ParametricGeometry(surface, 100, 100);


var object = new THREE.Mesh(
			geometry,
			new THREE.MeshNormalMaterial(),
    );	
		scene.add( object );



function animationLoop( t )
{
   object.rotation.z = t/2700;

    controls.update( );
		light.position.copy( camera.position );
    renderer.render( scene, camera );
}

</script>

```

<br>

**c2.js**

<script src="/scripts/c2/c2.min.js"></script>

<canvas id="c2"></canvas>

<script>

//Created by Ren Yuan


const renderer = new c2.Renderer(document.getElementById('c2'));
resize();

renderer.background('#cccccc');
let random = new c2.Random();


let world = new c2.World(new c2.Rect(0, 0, renderer.width, renderer.height));

for(let i=0; i<100; i++){
  let x = random.next(renderer.width);
  let y = random.next(renderer.height);
  let p = new c2.Particle(x, y);
  p.radius = random.next(10, renderer.height/14);
  p.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100));

  world.addParticle(p);
}

let quadTree = new c2.QuadTree(new c2.Rect(0,0,renderer.width,renderer.height));
let collision = new c2.Collision(quadTree);
//collision.iteration = 2;
world.addInteractionForce(collision);

let constForce = new c2.ConstForce(0, 1);
world.addForce(constForce);


function drawQuadTree(quadTree){
    renderer.stroke('#333333');
    renderer.lineWidth(1);
    renderer.fill(false);
    renderer.rect(quadTree.bounds);

    if(quadTree.leaf()) return;
    for(let i=0; i<4; i++) drawQuadTree(quadTree.children[i]);
}


renderer.draw(() => {
    renderer.clear();

    drawQuadTree(quadTree);

    world.update();

    for(let i=0; i<world.particles.length; i++){
      let p = world.particles[i];
      renderer.stroke('#333333');
      renderer.lineWidth(1);
      renderer.fill(p.color);
      renderer.circle(p.position.x, p.position.y, p.radius);
      renderer.lineWidth(2);
      renderer.point(p.position.x, p.position.y);
    }
});


window.addEventListener('resize', resize);
function resize() {
    let parent = renderer.canvas.parentElement;
    renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9);
}

</script>

Code from [link](https://github.com/ren-yuan/c2.js/blob/main/examples/ConstForce.js)

```javascript

    //Created by Ren Yuan


const renderer = new c2.Renderer(document.getElementById('c2'));
resize();

renderer.background('#cccccc');
let random = new c2.Random();


let world = new c2.World(new c2.Rect(0, 0, renderer.width, renderer.height));

for(let i=0; i<100; i++){
  let x = random.next(renderer.width);
  let y = random.next(renderer.height);
  let p = new c2.Particle(x, y);
  p.radius = random.next(10, renderer.height/14);
  p.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100));

  world.addParticle(p);
}

let quadTree = new c2.QuadTree(new c2.Rect(0,0,renderer.width,renderer.height));
let collision = new c2.Collision(quadTree);
//collision.iteration = 2;
world.addInteractionForce(collision);

let constForce = new c2.ConstForce(0, 1);
world.addForce(constForce);


function drawQuadTree(quadTree){
    renderer.stroke('#333333');
    renderer.lineWidth(1);
    renderer.fill(false);
    renderer.rect(quadTree.bounds);

    if(quadTree.leaf()) return;
    for(let i=0; i<4; i++) drawQuadTree(quadTree.children[i]);
}


renderer.draw(() => {
    renderer.clear();

    drawQuadTree(quadTree);

    world.update();

    for(let i=0; i<world.particles.length; i++){
      let p = world.particles[i];
      renderer.stroke('#333333');
      renderer.lineWidth(1);
      renderer.fill(p.color);
      renderer.circle(p.position.x, p.position.y, p.radius);
      renderer.lineWidth(2);
      renderer.point(p.position.x, p.position.y);
    }
});


window.addEventListener('resize', resize);
function resize() {
    let parent = renderer.canvas.parentElement;
    renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9);
}

```

