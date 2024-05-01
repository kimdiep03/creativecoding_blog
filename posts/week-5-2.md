---
title: Second Fifth Session
published_at: 2024-04-05
snippet: My second fifth blog
disable_html_sanitization: true
---

# Homework
**#2: Add explanatory comments to the code**

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

```html

<canvas id="pixel_sort"></canvas>
    
<script type="module">

// importing PixelSorter class from a separate .js file
   import { PixelSorter } from "/scripts/pixel_sort.js"

// getting canvas element 
   const cnv  = document.getElementById (`pixel_sort`)

// sizing size 
   cnv.width  = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16   

// getting canvas context
   const ctx = cnv.getContext (`2d`)

// creating instance for new class: PixelSorter
   const sorter = new PixelSorter (ctx)

// creating new image object
   const img = new Image ()

// define function to execute loading image file
   img.onload = () => {

    // canvas height is recalculated based on aspect ratio of the loaded image
      cnv.height = cnv.width * (img.height / img.width)
    
    // load image
      ctx.drawImage (img, 0, 0, cnv.width, cnv.height)

    // call function for pixel sorting effect
      sorter.init ()

    // call function to start animation loop
      draw_frame ()
   }
// source of image file
   img.src = `/240417_fifth_post/mood congruency.jpg`

// initialize variable frame_count 
// to keep track of the number of frames drawn
   let frame_count = 

// define function draw_frame to animate pixel sorting effect
   const draw_frame = () => {

    // redraw image  
      ctx.drawImage (img, 0, 0, cnv.width, cnv.height)

    // calculate sine wave value based on the frame count 
    // to dynamically adjust the size of the glitch effect
      let sig = Math.cos (frame_count * 2 * Math.PI / 500)

    // object mid: calculate center of the glitch effect
      const mid = {
        
        // store the center coordinates of the canvas
         x: cnv.width / 2,
         y: cnv.height / 2
      }
     
    // object dim: calculate dimension of the glitch effect
      const dim = {
        
        // store the dimensions (width + height) of the area to be affected by the effect
        // dimension is dynamically calculated based on the sig value
         x: Math.floor ((sig + 3) * (cnv.width / 6)) + 1,
         y: Math.floor ((sig + 1) * (cnv.height / 6)) + 1
      }

    // object pos: calculate the position of the effect will be applied
      const pos = {

        // define the starting position of the glitch area
         x: Math.floor (mid.x - (dim.x / 2)),
         y: Math.floor (mid.y - (dim.y / 2))
      }

    // apply the glitch effect using sorter.glitch method
      sorter.glitch (pos, dim)

    // increament frame_count to keep track of the current frame number 
      frame_count++
    
    // schedule the draw_frame function to be called again for the next animation frame 
      requestAnimationFrame (draw_frame)
   }
</script>
```

```html
<script>

// define a function: quicksort
const quicksort = a => {

    // take array: a as input and returns a sorted version of that array
    if (a.length <= 1) return a
 
    let pivot = a[0]
    let left = []
    let right = []
 
    for (let i = 1; i < a.length; i++) {
    
    // sorting based on brightness element within each element of the array 
       if (a[i].br < pivot.br) left.push (a[i])
       else right.push (a[i])
    }
 
    const sorted = [ ...quicksort (left), pivot, ...quicksort (right) ]
 
    return sorted
 }
 
 export class PixelSorter {
    constructor (ctx) {
       this.ctx = ctx
    }

// init method: initializes the pixel sorter
    init () {
        
        // setting the width and height of the canvas
       this.width = this.ctx.canvas.width
       this.height = this.ctx.canvas.height

       // obtaining the image data from the canvas
       this.img_data = this.ctx.getImageData (0, 0, this.width, this.height).data
    }
 
 // glitch method: core functionality of the pixel sorting effect
// two agruments -- pos: the position of the glitch effect, dim: dimensions of the glitch effect
    glitch (pos, dim) {

    // find_i function: calculate the index in the image data array for a given pixel position
       const find_i = c => ((c.y * this.ctx.canvas.width) + c.x) * 4 

    // for loop: iterate over the horizontal dimension of the glitch effect
       for (let x_off = 0; x_off < dim.x; x_off++) {
          const positions = []

        // for each column: collect the positions of the pixels that will be affected by the glitch effect.
          for (let y_pos = pos.y; y_pos < pos.y + dim.y; y_pos++) {
             positions.push (find_i ({ x: pos.x + x_off, y: y_pos }))
          }
        
        // unosrted array
          const unsorted = []

        // for each pixel position collected
          positions.forEach (p => {

            // extract the RGBA values
             const r = this.img_data[p]
             const g = this.img_data[p + 1]
             const b = this.img_data[p + 2]
             const a = this.img_data[p + 3]

            // calculates the brightness
             const br = r * g * b
            
            // push RGBA values + brightness in unosrted array
             unsorted.push ({ r, g, b, a, br })
          })

        // call quicksort function to sort the pixels based on their brightness
        // sorted array then reversed to ensure the brightest pixels are at the beginning
          const sorted = quicksort (unsorted).reverse ()

        // rgba array 
          let rgba = []

        //sorted pixels reassemble into an array of RGBA values
          sorted.forEach (e => {
             rgba.push (e.r)
             rgba.push (e.g)
             rgba.push (e.b)
             rgba.push (e.a)
          })

        // then converted into this Uint8ClampedArray
          rgba = new Uint8ClampedArray (rgba)

        // new ImageDate object created with the dimension of the effect 
          const new_data = this.ctx.createImageData (1, dim.y)
        
        // sorted RGBA values are set into this new image data
          new_data.data.set (rgba)

        //  the updated image data is drawn onto the canvas at the position
          this.ctx.putImageData (new_data, pos.x + x_off, pos.y)
       }
    }
 }
 </script>
 ```