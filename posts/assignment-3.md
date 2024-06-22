---
title: Interesting! Mycelial JavaScript & Communities of Practice
published_at: 2024-06-16
snippet: Process Documentation
disable_html_sanitization: true
---

# Final Product

![process](/240622_last_post/product.png)
Here: [(karaoke)](https://kimdiep03-kool-karaoke.deno.dev/) [(gallery)](https://kimdiep03-kool-karaoke.deno.dev/gallery.html)

# Documentation

1. At first, I copied the whole script from Assignment 2 and develop it. It took me a long time to brainstorm, add, eliminate, and sketch out the idea or prototypes of the website.
   <br>

   **sketch**
   ![process](/240622_last_post/sketch.jpg)
   <br>

2. I changed improved the code from one fixed color of background and confetti to everytime reload, a random color background and confetti.

<br>
from

```html
<script>
  // Assignment 2
  // Set background color
  canvas.style.backgroundColor = "MediumSpringGreen";

  // Random colors for the squares to draw
  function getRandomHSLColor() {
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

  // e.clientX and e.clientY -- the horizontal X and vertical Y coordinates of the mouse pointer
  // getRandomHSLColor() -- returns a random HSL
  // ctx -- to a canvas context, used to draw the graphical object on the canvas
  const root = new Root(e.clientX, e.clientY, getRandomHSLColor(), ctx);
</script>
```

to

```html
<script>
  // Assignment 3
  // Global hue types - changes on every page reload
  const availableHues = ["blue", "green", "pink", "red"];

  // Pick a random hue for the background and remove it from the list
  const bgHue = availableHues.splice(
    Math.floor(Math.random() * availableHues.length),
    1
  )[0];
  const fgHue = availableHues[Math.floor(Math.random() * availableHues.length)];

  // Function to generate random HSL color based on a color name
  function getRandomHSLColor(colorName) {
    switch (colorName) {
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

    const saturation = Math.floor(Math.random() * 50) + 50; // Random saturation value between 0 and 80
    const lightness = Math.floor(Math.random() * 5) + 60; // Random lightness value between 60 and 65
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Return HSL color string
  }

  // Fill the canvas background with a random HSL color based on background hue
  ctx.fillStyle = getRandomHSLColor(bgHue);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
</script>
```

<br>

3. I selected and edited the 'voices', with Web Audio API. Everytime it will assign a different 'voice' and a drop down for a selection of background songs.

   <br>
   from

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

to

```html
<script>
  // Global WebAudio context, initialized when user first chooses background music
  let audioCtx = null;
  // "Singing" voice
  let voiceNode = null;
  // Video recording output node
  let recordNode = null;
  // Background audio HTML element
  const bgAudioEl = document.getElementById("bg-audio");

  // Function asynchronously loads a random voice sample from an array of 'voices' (audio)
  async function loadVoiceSample() {
    // Define an array of audio file names
    const urls = [
      "dark.wav",
      "detuned.wav",
      "embellish.wav",
      "flux.wav",
      "grow.wav",
      "noisy.wav",
      "reveal.wav",
      "symphonic.wav",
    ];

    // To avoid repetition of the 'voices'
    const prevUrl = window.localStorage.getItem("prevVoiceUrl");
    // First checks the local storage for a previously used audios
    if (prevUrl) {
      // If a previous URL exists, it removes it from the list of available audios to avoid repetition
      const i = urls.indexOf(prevUrl);

      // If the URL is found, remove it from the list to avoid using the same sample again
      if (i !== -1) {
        urls.splice(i, 1);
      }
    }

    // Pick a random audio urls from the remaining options in the 'voices' (audio) urls array
    const curUrl = urls[Math.floor(Math.random() * urls.length)];

    // Store the current URL in localStorage for future reference
    window.localStorage.setItem("prevVoiceUrl", curUrl);

    // Fetch the audio file from the chosen URL
    const req = await fetch(curUrl);

    // Convert the fetched data to an ArrayBuffer
    const arrayBuf = await req.arrayBuffer();

    // Decode the ArrayBuffer into an audio buffer using the audio context
    const audioBuf = await audioCtx.decodeAudioData(arrayBuf);

    // Return the decoded audio buffer
    return audioBuf;
  }

  // Define an asynchronous function to initialize the AudioContext and setup nodes for recording and playback
  async function initAudioCtx() {
    // Create a new AudioContext instance
    audioCtx = new window.AudioContext();

    // Create a MediaStreamDestination node to capture audio output
    recordNode = audioCtx.createMediaStreamDestination();

    // Create a BufferSourceNode for playing back a sample
    voiceNode = audioCtx.createBufferSource();
    // Set the loop property to true so the sample loops indefinitely
    voiceNode.loop = true;

    // Create a GainNode to control the volume of the voice
    const voiceGainNode = audioCtx.createGain();

    // Connect the voice sample to the gain node
    voiceNode.connect(voiceGainNode);

    // Set the gain value to reduce the volume
    voiceGainNode.gain.value = 0.25;

    // Connect the gain node to the destination (speaker) and the record node
    voiceGainNode.connect(audioCtx.destination);
    voiceGainNode.connect(recordNode);

    // Create a MediaElementAudioSourceNode from a background audio element
    const audioSourceNode = audioCtx.createMediaElementSource(bgAudioEl);

    // Connect the background audio to the destination and the record node
    audioSourceNode.connect(audioCtx.destination);
    audioSourceNode.connect(recordNode);

    // Load a voice sample buffer asynchronously and assign it to the voice node
    voiceNode.buffer = await loadVoiceSample();

    // Start playing the voice sample
    voiceNode.start();
    // Make the record button visible
    document.getElementById("record-btn").style.display = "block";
  }
  // Function to change the background song
  function changeBackgroundSong(songUrl) {
    // Update the source of the background audio element and play it
    bgAudioEl.src = songUrl;
    bgAudioEl.play();
  }

  // Add an input event listener to the song select element
  document.getElementById("song-select").addEventListener("input", (event) => {
    // Initialize the audio context if it hasn't been initialized yet
    if (!audioCtx) {
      initAudioCtx();
    }

    // Change the background song based on the selected song URL
    changeBackgroundSong(event.target.value);

    // Hide the centered div
    document.getElementById("centered-div").style.display = "none";
  });

  // Add a mousemove event listener to adjust the playback rate of the voice sample based on mouse position
  window.addEventListener("mousemove", (event) => {
    // Adjust the playback rate of the voice sample based on the vertical mouse position
    if (voiceNode) {
      voiceNode.playbackRate.value = Math.pow(
        2,
        ((1.0 - event.clientY / window.innerHeight) * 2.0 - 1.0) * 2.0
      );
    }
  });
</script>
```

4. I had a long hard time think about how to do a compilation of all the videos from participants in the most efficient way, and I discovered [Web Recorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)

```html
<script>
  // VIDEO RECORDING FUNCTION
  // Using MediaRecorder API

  // Get the record button element
  const recordBtn = document.getElementById("record-btn");

  // Capturing the canvas stream, 20 frames per second
  const canvasStream = canvas.captureStream(20);
  let isRecording = false;
  let mediaRecorder = null;
  let mediaRecorderChunks = []; // Array to store recorded chunks

  // Save recorded chunks to the array
  function saveMediaRecorderChunks(event) {
    if (event.data.size > 0) {
      mediaRecorderChunks.push(event.data);
    }
  }

  // Export the recorded video
  function exportMediaRecorderVideo() {
    // Check if there are any chunks to export
    if (mediaRecorderChunks.length === 0) {
      return;
    }

    // Create a Blob from the recorded chunks
    const blob = new Blob(mediaRecorderChunks, {
      type: mediaRecorderChunks[0].type,
    });

    // Create a download link for the Blob
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `kool-karaoke-${Date.now()}.mp4`;
    link.click();

    // Revoke the object URL after 5 seconds
    window.setTimeout(() => URL.revokeObjectURL(vidURL), 5000);
  }

  // Start recording
  function startRecording() {
    // Reset the chunks array
    mediaRecorderChunks = [];

    // Get the video track from the canvas stream and the audio track from the record node
    const [videoTrack] = canvasStream.getVideoTracks();
    const [audioTrack] = recordNode.stream.getAudioTracks();

    // Create a new MediaStream with the tracks
    const avStream = new MediaStream([videoTrack, audioTrack]);

    // Initialize the MediaRecorder with the stream
    mediaRecorder = new MediaRecorder(avStream);

    // Add event listeners for dataavailable and stop events
    mediaRecorder.addEventListener("dataavailable", saveMediaRecorderChunks);
    mediaRecorder.addEventListener("stop", exportMediaRecorderVideo);

    // Start recording
    mediaRecorder.start();
  }

  // Stop recording
  function stopRecording() {
    mediaRecorder.stop();
  }

  // Toggle recording state
  function toggleRecording() {
    if (isRecording) {
      isRecording = false;
      recordBtn.textContent = "RECORD";
      stopRecording();
    } else {
      isRecording = true;
      recordBtn.textContent = "STOP";
      startRecording();
    }
  }

  // Add a click event listener to the record button to toggle recording
  recordBtn.addEventListener("click", toggleRecording);
</script>
```

5. After the core codes is the time for the arrangement of all elements (UI) of the web
6. After the website finished, I asked for participation from the online community that I knew and people who use the Internet. But it seems like, when I posted on Instagram, it was hard for them to use the web when they usually use their phones for Instagram. There was no mobile version for them, so, it got harder to access by the participants.

# Video Script

<br>

**about the concept that developed from A2**

Building upon Assignment 2 about 'Chaotic!', this project delves into the essence of karaoke, focusing on the joy of imperfect singing accompanied by background musics. Participants interact by moving their mouse, generating a 'voice' that 'sings' along with the music, embracing the inherent awkwardness and imperfection of karaoke performances. This concept was developed from my Creative Coding class, where we examined Ngai's aesthetics of chaos, and my personal experience watching my friends sing karaoke. The project aims to celebrate the "off-key" spirit of karaoke, valuing participant enjoyment over musical perfection.
<br>

**what has improved**

I aim to engage an online community that values anonymity, enabling users to freely express themselves through karaoke, embracing the joy of imperfection. To enhance community involvement, I introduced a recording feature and a sharing gallery for users to showcase their performances. Improvements include a variety of 'songs' and a dynamic assignment of 'voices' upon each page reload, similar to the unpredictability of natural voice assignments. Additionally, the website dynamically generates random colors of 'confetti' for background and foreground elements when each page reload. Every time the mouse moves, the 'confetti' spread out like an encouragement for participants with positive affirmations like "Good job You're doing great!" This builds upon the Assignment 2 concept of using confetti to motivate continuous participation.
<br>

**process**

<br>
To enhance the project, I used StemRoller for extracting bass from various tracks and integrated Garage Band with the Vital plugin for further manipulation. Future enhancements will focus on expanding, improving, and polishing the song library to meet my satisfaction.

Here is the final product. When users select a song, playback begins and record button appears. Eliminating the need for large file sizes typically associated with desktop screen recording, I implemented MediaStream Recording API ensures efficient recording for participants. Recordings are automatically saved to the user's device upon completion, simplifying the submission process via email.
<br>

**participation**

Then, I asked for participations through Discord, emails and Instagram. Some have tried the website but only a small number of participants has sent me their recordings. The MediaStream Recording API has limitation, where it only works well with Chrome and on MacOS. I discovered it cannot record properly on Windows, when a partipants sent me a recording. Here is the celebration of all performances.
<br>
