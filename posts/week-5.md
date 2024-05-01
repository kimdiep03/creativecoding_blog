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


# Homework
**#1: Add explanatory comments to the code**
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

   // getting canvas element
   const cnv = document.getElementById 
   (`glitch_self_portrait`)

    // sizing to be good size
   cnv.width = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16

    // setting background colour
   cnv.style.backgroundColor = `deeppink`

    // getting canvas context
   const ctx = cnv.getContext (`2d`)

    // instatiating variable for image data
   let img_data

   // defining a function that draws an image to the canvas
   const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

   // creating a new image element
   const img = new Image ()
   
   // define function to execute upon loading image file
   img.onload = () => {

    // resizing the height of the canvas
    // to be same aspect ratio as image
      cnv.height = cnv.width * (img.height / img.width)

    // drawing the image to the canvas
      draw (img)
    
    // storing image data as string in img_data
      img_data = cnv.toDataURL ("image/jpeg")

    // call the glitch function
      add_glitch ()
   }

   // give filepath to image element
   img.src = `/240417_fifth_post/mood congruency.jpg`

   // define a function that returns a random value between 0 - max
   const rand_int = max => Math.floor (Math.random () * max)

   // define a recursive function
   const glitchify = (data, chunk_max, repeats) => {
    
    // random multiple of 4 between 0 - chunk_max
      const chunk_size = rand_int (chunk_max / 4) * 4

    // random position in the data between 24 - chunk_size
      const i = rand_int (data.length - 24 - chunk_size) + 24
    
     // grabbing all the data before the random position
      const front = data.slice (0, i)
    
    // leaving a gap the size of chunk_size
    // grabbing the rest of the data
      const back = data.slice (i + chunk_size, data.length)
    
    // putting the two pieces back together 
    // leaving out a chunk
      const result = front + back

    // ternary operator to return result if repeats == 0
    // otherwise call itself again with repeats - 1
      return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
   }

   // instantiate empty array for glitched images
   const glitch_arr = []

   // define function that adds a glitched image
   // to the glitch_arr array
   const add_glitch = () => {

    // make new image element
      const i = new Image ()
    
    // define function that executes when image recieves its data
      i.onload = () => {

        // push the image into the glitch_arr array
         glitch_arr.push (i)

         // call itself until there are 12 glitched images
         if (glitch_arr.length < 12) add_glitch ()

         // once there 12 images, start animating
         else draw_frame ()
      }

      // give the new image some glitchified image data
      i.src = glitchify (img_data, 96, 6)
   }

   // instantiate variable to keep track of glitch state
   let is_glitching = false

   // keep track of which glitched image from the array we are using
   let glitch_i = 0

   const draw_frame = () => {

    // check to see if we are glitching
    // if so, draw the glitched image from the array
      if (is_glitching) draw (glitch_arr[glitch_i])
    
    // otherwise draw the regular image
      else draw (img)

    // probability weightings for starting and stopping the glitch
      const prob = is_glitching ? 0.05 : 0.02
    
    // if random value is less than weighted value
      if (Math.random () < prob) {
        
        // choose a random glitched image index
         glitch_i = rand_int (glitch_arr.length)
        
        // flip the state of is_glitching
         is_glitching = !is_glitching
      }
    //call the next animation frame
      requestAnimationFrame (draw_frame)
   }

</script>
```
<canvas id="pixel_sort"></canvas>

<script type="module">
   import { PixelSorter } from "/scripts/pixel_sort.js"

   const cnv  = document.getElementById (`pixel_sort`)
   cnv.width  = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16   

   const ctx = cnv.getContext (`2d`)
   const sorter = new PixelSorter (ctx)

   const img = new Image ()

   img.onload = () => {
      cnv.height = cnv.width * (img.height / img.width)
      ctx.drawImage (img, 0, 0, cnv.width, cnv.height)
      sorter.init ()
      draw_frame ()
   }

   img.src = `/240417_fifth_post/mood congruency.jpg`

   let frame_count = 0
   const draw_frame = () => {

      ctx.drawImage (img, 0, 0, cnv.width, cnv.height)

      let sig = Math.cos (frame_count * 2 * Math.PI / 500)

      const mid = {
         x: cnv.width / 2,
         y: cnv.height / 2
      }

      const dim = {
         x: Math.floor ((sig + 3) * (cnv.width / 6)) + 1,
         y: Math.floor ((sig + 1) * (cnv.height / 6)) + 1
      }

      const pos = {
         x: Math.floor (mid.x - (dim.x / 2)),
         y: Math.floor (mid.y - (dim.y / 2))
      }

      sorter.glitch (pos, dim)

      frame_count++
      requestAnimationFrame (draw_frame)
   }

</script>