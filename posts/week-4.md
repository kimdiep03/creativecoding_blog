---
title: Fourth Session
published_at: 2024-04-3
snippet: My fourth blog
disable_html_sanitization: true
---
# Learning
<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/cnuZONnLQ" width = "400px" height = "442px"></iframe>
</div>

```html
<script>
let xoff1 = 0;
let xoff2 = 10000;


function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  // background(90, 30, 80);
  //noStroke();
  loadPixels();
  
  //random();
  let x = random(width);
  let y = random(height);
  
  fill(130, 50, 70);
  ellipse(x, y, 24, 24);
  
  //noise()_#1;
  let a = map(noise(xoff1), 0, 1, 9, width);
  let b = map(noise(xoff2), 0, 1, 9, height);

  fill(250, 100, 70);
  ellipse(a, b, 50);
  
  xoff1 += 0.01;  
  xoff2 += 0.01;  
  
  //noise()_#2;
  for (let i = 0; i < width; i++) {
    stroke(220, 100, 100);
    point(i, random(height));
  }

}
</script>
```

<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/Y-ltv4G_C" width="400px" height="342px"></iframe>
</div>

```html
<script>
let inc = 0.005;

function setup() {
  createCanvas(400, 300);
  pixelDensity(1);
}

function draw() {
  
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      
      xoff += inc;
    }
    yoff += inc
  }
  updatePixels();
  
}
</script>
```

<div align = "center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/d8pKSKXT8" width="400px" height="442px"></iframe>
</div>

```html
<script>
    //follow this tutorial: https://youtu.be/Qf4dIN99e2w?si=7tGWcn27WLDbHekc

let inc = 0.1;
let scl = 10; 
let cols, rows;

let zoff = 0;

let particles = [];
let flowfield;

function setup() {
  createCanvas(400, 400);
  background (220);
  cols = floor(width / scl);
  rows = floor(height / scl);
  
  flowfield = new Array(cols * rows);
  
  for (let i = 0; i < 500; i++) {
  particles[i] = new Particle();
  }
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * cols);
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(5);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 20);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc
    
    zoff += 0.0001;
  }
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show(); 
    particles[i].edges();
  }

} 
</script>
```
<div align="center">
<iframe src="https://editor.p5js.org/kimnhudiep2003/full/gsrR01v6_" width="400px" height="442px"></iframe>
</div>

```html
<script>
let x, y, d;
let posX, posY, w, h;

function setup() {
  createCanvas(400, 400);
  background(0);
  colorMode(HSB);
  frameRate(8);
}

function draw() {
  drawingContext.globalAlpha = 0.5;
  drawCircle(width/2, height/2, 300)
  
  fill(random(0, 50), 70, 90);
  rect(0, 0, width, height)
}

function drawCircle(x, y, d) {
  //noFill();
  noStroke();
  fill(random(180, 220), 60, 80);
  ellipse(x, y, d, d);
  if (d > 5) {
    drawCircle(x+d/2, y, d/2);
    drawCircle(x-d/2, y, d/2);
    drawCircle(x, y+d/2, d/2);
    drawCircle(x, y-d/2, d/2);

  }
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

<div align ="center">
    <iframe src="https://editor.p5js.org/kimnhudiep2003/full/8OtGKqr_2" width="400px" height="462px"></iframe>
</div>

```html
<script>
    let slider; 
let angle;


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  angle = PI/4;
  
  slider = createSlider(0, TWO_PI, PI/4);
  frameRate(5)
}

function draw() {
  background(random(300, 360), 30, 70);

  angle = slider.value();
  let len = 100;
  stroke(random(100, 250), 50, 80);
  strokeWeight(2.5);
  translate(200, height);
  branch(100);
  
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle)
    branch(len*0.67);
    pop();
  }
}
</script>
```

# Homework
<canvas id="fractal_tree_0"></canvas>

<script type="module">
    // getting canvas element
    const cnv = document.getElementById (`fractal_tree_0`)
    
    // sizing size
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    // setting background colour
   cnv.style.backgroundColor = `deeppink`

    // canvas context
   const ctx = cnv.getContext (`2d`)
   const TAU = Math.PI * 2

class Vector {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    add (v) {
        this.x += v.x
        this.y += v.y
    }

    subtract (v) {
        this.x -= v.x
        this.y -= v.y
    }

    mult (m) {
        this.x *= m
        this.y *= m
    }

    mag () { // using a^2 + b^2 = c^2
        return ((this.x ** 2) + (this.y ** 2)) ** 0.5
    }

    setMag (m) {
        this.mult (m / this.mag ())
    }

    rotate (a) {
        // from "Formula for rotating a vector in 2D" by Matthew Brett
        // https://matthew-brett.github.io/teaching/rotation_2d.html

        const new_x = (this.x * Math.cos (a)) - (this.y * Math.sin (a))
        const new_y = (this.x * Math.sin (a)) + (this.y * Math.cos (a))

        this.x = new_x
        this.y = new_y
    }

    clone () {
        return new Vector (this.x, this.y)
    }
}

function vector_from_angle (angle, magnitude) {
    const x = magnitude * Math.cos (angle)
    const y = magnitude * Math.sin (angle)
    return new Vector (x, y)
}

   function tree (base, stem, generation) {

        // start with the base position
        // we want to tranform it, so we make a copy
        const end = base.clone ()

        // add the stem to the start position
        end.add (stem)

        // draw the line from the start point
        // to the end point
        ctx.beginPath ()
        ctx.moveTo (base.x, base.y)
        ctx.lineTo (end.x, end.y)
        ctx.stroke ()

        // if generations is still positive
        if (generation > 0) {

            // clone the stem
            const L_stem = stem.clone ()

            // rotate it anti-clockwise
            L_stem.rotate (-TAU / 7)

            // reduce the length
            L_stem.mult (0.6)

            // clone the stem again
            const R_stem = stem.clone ()

            // rotate this one clockwise
            R_stem.rotate (TAU / 7)

            // reduce its length
            R_stem.mult (0.6)

            // decrease generation by 1
            const next_gen = generation - 1

            tree (end, L_stem, next_gen)
            tree (end, R_stem, next_gen)
        }
    }

    const seed = new Vector (cnv.width / 2, cnv.height)

    const shoot = new Vector (0, -150)

    tree (seed, shoot, 7)  
</script>
<br>

**Can this method be used to maximize chaos? How might you use it in assignment 2?**
<br>
"This approach enhances chaos by increasing the number of recursive patterns, which are then combined with elements of randomness and noise."

