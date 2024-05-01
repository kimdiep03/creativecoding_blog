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


# Homework
<canvas id="glitch_self_portrait"></canvas>

<script type="module">

//getting canvas element
   const cnv = document.getElementById (`glitch_self_portrait`)

//sizing to be good size
   cnv.width = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16

//setting background color
   cnv.style.backgroundColor = `deeppink`

//getting canvas context
   const ctx = cnv.getContext (`2d`)

//instatiating variable for image data 
   let img_data

//defining a function that draws an image to the canvas
   const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

//create a new img element
   const img = new Image ()

//define function to execute upon loading image file
   img.onload = () => {

    //resizing the height of the canvas 
    //to be the same aspect ratio as image 
      cnv.height = cnv.width * (img.height / img.width)
    
    //drawing the image to the canvas
      draw (img)

    //storing image data as string in img_data 
      img_data = cnv.toDataURL ("image/jpeg")

    //call the glitch function 
      add_glitch ()
   }
   
//give filepath to image element 
   img.src = `/240417_fifth_post/mood congruency.jpg`

//define a function that returns a random value between 0-max 
   const rand_int = max => Math.floor (Math.random () * max)

//define a recursive function 
   const glitchify = (data, chunk_max, repeats) => {
    
    //random multiple of 4 between 0 - chunk max
      const chunk_size = rand_int (chunk_max / 4) * 4
    
    //random position in the data between 24 - chunk_size
      const i = rand_int (data.length - 24 - chunk_size) + 24
    
    //grabbing all the data before the random position 
      const front = data.slice (0, i)

    //leaving a gap the size of chunk_size,
    //grabbing the rest of the data  
      const back = data.slice (i + chunk_size, data.length)

    //putting the two pieces back together
    //leaving out a chunk 
      const result = front + back
    
    //ternary operator to return results if repeats = 0
    //otherwise call itself again with repeats - 1
      return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
   }

//instantiate empty array for glitched images 
   const glitch_arr = []

//define function that adds a glitched image
//to the glitch_arr array
   const add_glitch = () => {

    //make a new image element
      const i = new Image ()

    //define function that executes when image receives its data
      i.onload = () => {

        //push the image into the glitch_arr array
         glitch_arr.push (i)

        //call itself until there are 12 glitched images
         if (glitch_arr.length < 12) add_glitch ()

        //one there are 12 images, start animating
         else draw_frame ()
      }

    //give the new image some glitchified image data 
      i.src = glitchify (img_data, 96, 6)
   }

//instantiate variable to keep track of glitch state
   let is_glitching = false

//keep track of which glitched image from the array we are using 
   let glitch_i = 0

   const draw_frame = () => {

    //check to see if we are glitching
    //if so, draw the glitched image from the array
      if (is_glitching) draw (glitch_arr[glitch_i])

    //otherwise draw the regular shape 
      else draw (img)
    
    //probability weightings for starting and stopping the glitch
      const prob = is_glitching ? 0.05 : 0.02

    //if random value is less than weighted value 
      if (Math.random () < prob) {
    
        //choose a rnadom glitched image index
         glitch_i = rand_int (glitch_arr.length)

        //flip the state of is_glitching 
         is_glitching = !is_glitching
      }
    
    //call the next animation frame
      requestAnimationFrame (draw_frame)
   }

</script>

```html
<canvas id="glitch_self_portrait"></canvas>

<script type="module">

   const cnv = document.getElementById (`glitch_self_portrait`)
   cnv.width = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16
   cnv.style.backgroundColor = `deeppink`

   const ctx = cnv.getContext (`2d`)

   let img_data

   const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

   const img = new Image ()
   img.onload = () => {
      cnv.height = cnv.width * (img.height / img.width)
      draw (img)
      img_data = cnv.toDataURL ("image/jpeg")
      add_glitch ()
   }
   img.src = `/240417_fifth_post/mood congruency.jpg`

   const rand_int = max => Math.floor (Math.random () * max)

   const glitchify = (data, chunk_max, repeats) => {
      const chunk_size = rand_int (chunk_max / 4) * 4
      const i = rand_int (data.length - 24 - chunk_size) + 24
      const front = data.slice (0, i)
      const back = data.slice (i + chunk_size, data.length)
      const result = front + back
      return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
   }

   const glitch_arr = []

   const add_glitch = () => {
      const i = new Image ()
      i.onload = () => {
         glitch_arr.push (i)
         if (glitch_arr.length < 12) add_glitch ()
         else draw_frame ()
      }
      i.src = glitchify (img_data, 96, 6)
   }

   let is_glitching = false
   let glitch_i = 0

   const draw_frame = () => {
      if (is_glitching) draw (glitch_arr[glitch_i])
      else draw (img)

      const prob = is_glitching ? 0.05 : 0.02
      if (Math.random () < prob) {
         glitch_i = rand_int (glitch_arr.length)
         is_glitching = !is_glitching
      }
    //call the next animation frame
      requestAnimationFrame (draw_frame)
   }

</script>
```
