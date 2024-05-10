---
title: Chaotic! JavaScript Ecology & the Post-Digital
published_at: 2024-05-10
snippet: Process Documentation
disable_html_sanitization: true
---

# Discussion

**Which artists / particular works your submission responds to?**
**what techniques you used to achieve a zany / chaotic aesthetic?**

```html
<script>
      // Layer2: glass layer
  <canvas id="layer2" style="display:none;"></canvas>

  <style>
          #layer2 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          }
  </style>

  const layer2 = document.getElementById (`layer2`);
  const ctx2 = layer2.getContext('2d');

  // Initialize layer2 size
  layer2.width = window.innerWidth;
  layer2.height = window.innerHeight;

  const CELL_SIZE = 32;
  let WIDTH_CELLS = null;
  let HEIGHT_CELLS = null;
  ctx2.globalAlpha = 0.5;

  let totalTime = 0.0;

     function setup() {
        layer2.width = window.innerWidth;
        layer2.height = window.innerHeight;
        WIDTH_CELLS = Math.ceil(window.innerWidth * window.devicePixelRatio / CELL_SIZE);
        HEIGHT_CELLS = Math.ceil(window.innerHeight * window.devicePixelRatio / CELL_SIZE);
        layer2.width = WIDTH_CELLS * CELL_SIZE;
        layer2.height = HEIGHT_CELLS * CELL_SIZE;

      }


     function backgroundEffect() {
        noStroke()

        drawingContext.fillStyle = '#f00'
        rect(0, 0, width, height)

        drawingContext.fillStyle = '#0f0'
        rect(100, 100, 200, 200)
     }

   // Define the glassSquare function
   function glassSquare(cellX, cellY, gx, gy, color1, color2) {
     const realLeft = cellX * CELL_SIZE;
     const realTop = cellY * CELL_SIZE;
     const gx1 = Math.max(1.0, Math.min(gx, 1.0));
     const gy1 = Math.max(1.0, Math.min(gy, 1.0));
     const gx2 = 1.0 - gx1;
     const gy2 = 1.0 - gy1;

     // Create a linear gradient for the fill
     const gradient = ctx2.createLinearGradient(realLeft + gx1 * CELL_SIZE, realTop + gy1 * CELL_SIZE, realLeft + gx2 * CELL_SIZE, realTop + gy2 * CELL_SIZE);
     gradient.addColorStop(0, color1);
     gradient.addColorStop(1, color2);

     // Optionally, you can add a border for a more distinct look
     ctx2.strokeStyle = color2;
     ctx2.strokeRect(realLeft, realTop, CELL_SIZE, CELL_SIZE);

     // Fill the square with the gradient
     ctx2.fillStyle = gradient;
     ctx2.fillRect(realLeft, realTop, CELL_SIZE, CELL_SIZE);
  }

     // Define the glass function with animation
     function glass() {
        for (let cellY = 0; cellY < HEIGHT_CELLS; ++cellY) {
          for (let cellX = 0; cellX < WIDTH_CELLS; ++cellX) {
            glassSquare(cellX, cellY, Math.abs(Math.sin(totalTime * 0.0005)), Math.abs(Math.cos(totalTime * 0.0005)), '#fffa', '#fff0')
          }
        }
      }

   // Define the draw function
   function draw() {
     totalTime += 0.0167;
     ctx2.clearRect(0, 0, layer2.width, layer2.height); // Clear the canvas
     glass();
     requestAnimationFrame(draw); // Call draw again on next frame
  }


     layer2.style.display = 'block';

   // Call setup and start the animation loop
     setup();
     draw();

     console.log(layer2)
</script>
```
