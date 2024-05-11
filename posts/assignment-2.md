---
title: Chaotic! JavaScript Ecology & the Post-Digital
published_at: 2024-05-10
snippet: Process Documentation
disable_html_sanitization: true
---

# Discussion

**1. Which artists / particular works your submission responds to?**
<br>

![process](/240511_eighth_post/inspo.png)

<br>

The inspiration for this chaotic assignment was drawn from **Kerry Mitchell's** ["Striped 3"](https://www.kerrymitchellart.com/gallery85/striped3.html) and **the concept of karaoke**. Mitchell's swirling stripes inspire a vision of party confetti and karaoke, embodying Ngai's chaotic/zany performance that "involves imitation and mimicry, as if trying to copy what someone else does but doing it clumsily" and is "more likely to convert triumph into failure than failure into triumph".

<br>

Karaoke is a type of interactive entertainment that allows individuals to sing along a device that plays instrumental accompaniments, for a selection of songs, typically featuring a wide range of popular songs. This culture highlights the tendency of consumers to try to copy or imitate the vocal styles of the original artists, resulting in awkward and clumsy performances. However, it is these moments of imperfection that transform into a source of amusement and a playful expression of entertainment, where the joy of singing, regardless of skill level, becomes the core of the experience.

<br>

**2. What techniques you used to achieve a zany / chaotic aesthetic?**

**Sound**

Mirroring karaoke's central role of music, sound has the main role in this piece. Two elements: background music and adjustable sound effects based on cursor position, mimicking user "singing" along. The interplay between sound effect and background music can produce dissonance, illustrates the funny awkwardness in karaoke.

<br>

**Visual**

To complement the auditory experience, the visual employ the random burst of movement and color through confetti serves as a motivational boost for users to keep going.

<br>

**Mousemove**

The use of 'mouse move' movement (serves as a trigger for all events) also plays an key role in chaotic aesthetic, unlike other triggers ('mouse pressed'). Users are not in control of turning off the sounds, even if stop moving the mouse. The visual can stop but the sound effect keeps going, which can make user uncomfortable, which also intentionally serves as a motivational boost for users to keep going. This continual push makes users no longer players but workers, which is one of the characteristics Ngai mentioned: "(zany) is about activities where play becomes a job or work gets too playful" or "there’s instability between play and labor".

<br>

# Process

![process](/240511_eighth_post/img1.png)

I followed the [tutorial](https://youtu.be/0v4_Dw0K8pw?si=U4qluF4gubY2QPXT) that has the basic movement / visual that I wanted to employed from Franks laboratory. Then modified it over time.

<br>

![process](/240511_eighth_post/img2.png)
![process](/240511_eighth_post/img5.png)
![process](/240511_eighth_post/img6.png)

I played with the alpha...

```html
<script>
  ctx.globalAlpha = 0.5; // Set global alpha for the entire canvas
</script>
```

<br>

![process](/240511_eighth_post/img3.png)

Randomized the colors: blue, green, pink, red

```html
<script>
  // Random colors for the squares to draw
  function getRandomHSLColor() {
    let hueType;

    // If value > 0.75, draw blue
    if (Math.random() > 0.75) {
      hueType = "blue";

      // If value > 0.5, draw green
    } else if (Math.random() > 0.5) {
      hueType = "green";

      // Else, value < 0.75, draw pink or red
    } else {
      hueType = Math.random() < 0.75 ? "pink" : "red";
    }

    let hue;
    switch (hueType) {
      case "blue":
        hue = Math.floor(Math.random() * 60) + 210; // Hue for blue
        break;
      case "green":
        hue = Math.floor(Math.random() * 60) + 100; // Hue for green
        break;
      case "pink":
        hue = Math.floor(Math.random() * 60) + 310; // Hue for pink
        break;
      case "red":
        hue = Math.floor(Math.random() * 60) + 0; // Hue for red
        break;
    }

    const saturation = Math.floor(Math.random() * 100); // Random saturation value between 0 and 80
    const lightness = Math.floor(Math.random() * 5) + 60; // Random lightness value between 60 and 65
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // String of the values of hue, saturation, and lightness
  }

  // The event object e
  // Everytime the mouse move over the canvas
  window.addEventListener("mousemove", function (e) {
    // Code to execute when the mouse moves
    // Root class is created

    // e.clientX and e.clientY -- the horizontal X and vertical Y coordinates of the mouse pointer
    // getRandomHSLColor() -- returns a random HSL
    // ctx -- to a canvas context, used to draw the graphical object on the canvas
    const root = new Root(e.clientX, e.clientY, getRandomHSLColor(), ctx);

    // Updates the state of the object (position, size, color) and redrawing it on the canvas
    // Argument ctx
    root.update(ctx);

    // Adjusts the frequency of an oscillator based on the vertical position of the mouse cursor
    oscillator?.frequency.setValueAtTime(
      // 50 is a base frequency
      // 700 is a range of frequencies
      // 1 at the top of the window to 0 at the bottom
      // Mapping the Y position of the mouse to a frequency range from 50-700 Hz
      50 + 700 * (1.0 - e.clientY / window.innerHeight),
      audioCtx.currentTime
    ); // value in hertz
  });

  // ?. operator is used to safely access the frequency property of the oscillator
  // If oscillator is null or undefined -> will not throw an error
</script>
```

<br>

![process](/240511_eighth_post/img4.png)

Tried to apply the pixel glass effect... then resulted in error... I created 2nd canvas to put above the 1st one as a layer

![process](/240511_eighth_post/img7.png)
![process](/240511_eighth_post/img8.png)
![process](/240511_eighth_post/img9.png)

Then, it finally appeared! But then, it does not like I wanted so I deleted it...

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

![process](/240511_eighth_post/img11.png)

Then I experimented with sounds to make the background music through Garage Band with Vital plug in. Then it does not work until I realized I need to have a click function for user for it to work... Then the sound effect.

```html
<script>
  // Background music
  function playAudio() {
    // Background music
    // Find an HTML element with the ID myAudio
    const audio = document.getElementById("myAudio");

    if (audio) {
      // Volume of background music
      audio.volume = 1;

      // Enables looping background music
      audio.loop = true;

      // Play background music
      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    } else {
      // If the element is not found, logs an error message to the console
      console.error("Audio element not found");
    }

    // Create Web Audio API context
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // create Oscillator node -- generates a waveform
    oscillator = audioCtx.createOscillator();

    // Type of waveform: sine -- pure sine wave sound
    oscillator.type = "sine";

    // Controls the volume of the audio signal
    let gainNode = audioCtx.createGain();

    // Volume is 0.01
    gainNode.gain = 0.01;

    // To connect oscillator and gainNode
    oscillator.connect(gainNode);

    // Gain node is connected to the audio context's destination (the speakers)
    gainNode.connect(audioCtx.destination);

    // Call oscillator
    oscillator.start();
  }

  // Clicks anywhere on the page, the playAudio function is called (background music and sound effect)
  window.addEventListener("click", playAudio);
</script>
```

![process](/240511_eighth_post/img10.png)
![process](/240511_eighth_post/img12.png)

Final result, but missing my font... but thankfully, it appeared at the end!

<br>
<br>
