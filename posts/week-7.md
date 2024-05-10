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

<canvas id = "canvas_element"> </canvas>

<script type="module">

  // tutorial from: https://youtu.be/5dIbK0auaB8?si=tUkarSzZ2APlT1Ml
  const canvas = document.getElementById (`canvas_element`);
  const ctx = canvas.getContext('2d');
    // sizing size
  canvas.width = canvas.parentNode.scrollWidth
  canvas.height = canvas.width * 9 / 16
  canvas.style.backgroundColor = 'black';
  const context = ctx;
  console.log(ctx);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, 'LightPink');
  gradient.addColorStop(0.25, 'DeepPink');
  gradient.addColorStop(0.5, 'Magenta');
  gradient.addColorStop(0.75, 'HotPink');
  gradient.addColorStop(1,'Fuchsia');
  ctx.fillStyle = gradient;

  window.onresize = () => {
    canvas.width = innerWidth
    canvas.height = innerHeight   
  }

  class Particle {
    constructor(effect) {
        this.effect = effect;
        this.radius = Math.random() * 20 + 17;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 4 - 2;
        this.vy = Math.random() * 4 - 2;

    
    }
    draw(context){
        //context.fillStyle = 'hsl('+ this.x * 0.1 +', 100%, 50%)';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }

    update() {
        if (this.effect.mouse.pressed) {
          const dx = this.x - this.effect.mouse.x;
          const dy = this.y - this.effect.mouse.y;

          const distance = Math.hypot(dx, dy);
          if (distance < this.effect.mouse.radius) {
              const angle = Math.atan2(dy, dx);
              this.x += Math.cos(angle);
              this.y += Math.sin(angle);
          }
        }
        
        this.x += this.vx;
        if (this.x > this.effect.width - this.radius || this.x < this.radius) this.vx *= -1;
        
        this.y += this.vy;
        if (this.x > this.effect.height - this.radius || this.y < this.radius) this.vy *= -1;
    }

    reset() {
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
    }
  }

  class Effect {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 500;
        this.createParticles();

        this.mouse = {
          x: 0,
          y: 0, 
          pressed: false, 
          radius: 200
        }

        window.addEventListener('resize', e => {
          this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
        });

        window.addEventListener('mousemove', e => {
          if (this.mouse.pressed){
              this.mouse.x = e.x;
              this.mouse.y = e.y;
          }
        });

        window.addEventListener('mousedown', e => {
          this.mouse.pressed = true;
          this.mouse.x = e.x;
          this.mouse.y = e.y;
        });

        window.addEventListener('mouseup', e => {
          this.mouse.pressed = false;
        });
    }
    createParticles(){
        for (let i = 0; i < this.numberOfParticles; i++) {
          this.particles.push(new Particle(this));
        }
    }
    handleParticles(){
        this.particles.forEach(particle => {
          particle.draw(context);
          particle.update();
        });
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        const gradient = this.context.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(0, 'LightPink');
        gradient.addColorStop(0.25, 'DeepPink');
        gradient.addColorStop(0.5, 'Magenta');
        gradient.addColorStop(0.75, 'HotPink');
        gradient.addColorStop(1,'Fuchsia');
        this.context.fillStyle = gradient;
        this.particles.forEach(particle => {
          particle.reset();
        })
    }

  }

  const effect = new Effect(canvas, ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
  }
  animate();
</script>

```html
<canvas id = "canvas_element"> </canvas>

<script type="module">

  // tutorial from: https://youtu.be/5dIbK0auaB8?si=tUkarSzZ2APlT1Ml
  const canvas = document.getElementById (`canvas_element`);
  const ctx = canvas.getContext('2d');
    // sizing size
  canvas.width = canvas.parentNode.scrollWidth
  canvas.height = canvas.width * 9 / 16
  canvas.style.backgroundColor = 'black';
  const context = ctx;
  console.log(ctx);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, 'LightPink');
  gradient.addColorStop(0.25, 'DeepPink');
  gradient.addColorStop(0.5, 'Magenta');
  gradient.addColorStop(0.75, 'HotPink');
  gradient.addColorStop(1,'Fuchsia');
  ctx.fillStyle = gradient;

  window.onresize = () => {
    canvas.width = innerWidth
    canvas.height = innerHeight   
  }

  class Particle {
    constructor(effect) {
        this.effect = effect;
        this.radius = Math.random() * 20 + 17;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 4 - 2;
        this.vy = Math.random() * 4 - 2;

    
    }
    draw(context){
        //context.fillStyle = 'hsl('+ this.x * 0.1 +', 100%, 50%)';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }

    update() {
        if (this.effect.mouse.pressed) {
          const dx = this.x - this.effect.mouse.x;
          const dy = this.y - this.effect.mouse.y;

          const distance = Math.hypot(dx, dy);
          if (distance < this.effect.mouse.radius) {
              const angle = Math.atan2(dy, dx);
              this.x += Math.cos(angle);
              this.y += Math.sin(angle);
          }
        }
        
        this.x += this.vx;
        if (this.x > this.effect.width - this.radius || this.x < this.radius) this.vx *= -1;
        
        this.y += this.vy;
        if (this.x > this.effect.height - this.radius || this.y < this.radius) this.vy *= -1;
    }

    reset() {
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
    }
  }

  class Effect {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 500;
        this.createParticles();

        this.mouse = {
          x: 0,
          y: 0, 
          pressed: false, 
          radius: 200
        }

        window.addEventListener('resize', e => {
          this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
        });

        window.addEventListener('mousemove', e => {
          if (this.mouse.pressed){
              this.mouse.x = e.x;
              this.mouse.y = e.y;
          }
        });

        window.addEventListener('mousedown', e => {
          this.mouse.pressed = true;
          this.mouse.x = e.x;
          this.mouse.y = e.y;
        });

        window.addEventListener('mouseup', e => {
          this.mouse.pressed = false;
        });
    }
    createParticles(){
        for (let i = 0; i < this.numberOfParticles; i++) {
          this.particles.push(new Particle(this));
        }
    }
    handleParticles(){
        this.particles.forEach(particle => {
          particle.draw(context);
          particle.update();
        });
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        const gradient = this.context.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(0, 'LightPink');
        gradient.addColorStop(0.25, 'DeepPink');
        gradient.addColorStop(0.5, 'Magenta');
        gradient.addColorStop(0.75, 'HotPink');
        gradient.addColorStop(1,'Fuchsia');
        this.context.fillStyle = gradient;
        this.particles.forEach(particle => {
          particle.reset();
        })
    }

  }

  const effect = new Effect(canvas, ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
  }
  animate();
</script>
```

<canvas id = "canvas_element2"> </canvas>

<script type="module">

  // tutorial from: https://www.youtube.com/watch?v=0v4_Dw0K8pw&t=46s 
  const canvas = document.getElementById (`canvas_element2`);
  const ctx = canvas.getContext('2d');
    // sizing size
  canvas.width = canvas.parentNode.scrollWidth
  canvas.height = canvas.width * 9 / 16
  canvas.style.backgroundColor = 'black';
  const context = ctx;
  console.log(ctx);

//   window.onresize = () => {
//    canvas.width = innerWidth
//    canvas.height = innerHeight   
// }

class Root {
   constructor(x, y, ctx) {
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.speedX = Math.random() * 4 - 2; // random speed for horizontal movement
      this.speedY = Math.random() * 4 - 2; // random speed for vertical movement
      this.maxSize = Math.random() * 7 + 5; // maximum size the object can grow to
      this.size = Math.random() * 1 + 2;
      this.vs = Math.random() * 0.2 + 0.05; 
      this.angleX = Math.random() * 6.2;
      this.vax = Math.random() * 0.6 - 0.3;
      this.angleY = Math.random() * 6.2;
      this.vay = Math.random() * 0.6 - 0.3;
      this.gradientParams = {
         centerX: 110,
         centerY: 90,
         innerRadius: 30,
         outerRadius: 70
      };
   }

   createGradient() {
      // create a new radial gradient based on the circle's current position and size
      const gradient = ctx.createRadialGradient(this.x, this.y, this.size / 2, this.x, this.y, this.size);
      gradient.addColorStop(0, "pink");
      gradient.addColorStop(0.9, "turquoise");
      gradient.addColorStop(1, "pink");
      return gradient;
   }

   update() {
      this.x += this.speedX + Math.sin(this.angleX); //positive value: move to the right, negative value: move to the left
      this.y += this.speedY + Math.sin(this.angleY);// negative value: move upward, positive value: downward
      this.size += this.vs;
      this.angleX += this.vax;
      this.angleY += this.vay;
      if (this.size < this.maxSize) {
         //recalculate gradient
         const gradient = ctx.createRadialGradient(this.x, this.y, this.size / 2, this.x, this.y, this.size);
         gradient.addColorStop(0, "pink");
         gradient.addColorStop(0.5, "turquoise");
         gradient.addColorStop(1, "pink");
         ctx.fillStyle = gradient;
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
         ctx.fill();
         ctx.stroke();
         requestAnimationFrame(() => this.update()); // pass ctx to the next frame
      }
   }
}

window.addEventListener('mousemove', function(e){
   const root = new Root(e.clientX, e.clientY, ctx); // use clientX and clientY for mouse position
   root.update(); // context to the update method
})

</script>

```html
<canvas id = "canvas_element2"> </canvas>

<script type="module">

  // tutorial from: https://www.youtube.com/watch?v=0v4_Dw0K8pw&t=46s 
  const canvas = document.getElementById (`canvas_element2`);
  const ctx = canvas.getContext('2d');
    // sizing size
  canvas.width = canvas.parentNode.scrollWidth
  canvas.height = canvas.width * 9 / 16
  canvas.style.backgroundColor = 'black';
  const context = ctx;
  console.log(ctx);

//   window.onresize = () => {
//    canvas.width = innerWidth
//    canvas.height = innerHeight   
// }

class Root {
   constructor(x, y, ctx) {
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.speedX = Math.random() * 4 - 2; // random speed for horizontal movement
      this.speedY = Math.random() * 4 - 2; // random speed for vertical movement
      this.maxSize = Math.random() * 7 + 5; // maximum size the object can grow to
      this.size = Math.random() * 1 + 2;
      this.vs = Math.random() * 0.2 + 0.05; 
      this.angleX = Math.random() * 6.2;
      this.vax = Math.random() * 0.6 - 0.3;
      this.angleY = Math.random() * 6.2;
      this.vay = Math.random() * 0.6 - 0.3;
      this.gradientParams = {
         centerX: 110,
         centerY: 90,
         innerRadius: 30,
         outerRadius: 70
      };
   }

   createGradient() {
      // create a new radial gradient based on the circle's current position and size
      const gradient = ctx.createRadialGradient(this.x, this.y, this.size / 2, this.x, this.y, this.size);
      gradient.addColorStop(0, "pink");
      gradient.addColorStop(0.9, "turquoise");
      gradient.addColorStop(1, "pink");
      return gradient;
   }

   update() {
      this.x += this.speedX + Math.sin(this.angleX); //positive value: move to the right, negative value: move to the left
      this.y += this.speedY + Math.sin(this.angleY);// negative value: move upward, positive value: downward
      this.size += this.vs;
      this.angleX += this.vax;
      this.angleY += this.vay;
      if (this.size < this.maxSize) {
         //recalculate gradient
         const gradient = ctx.createRadialGradient(this.x, this.y, this.size / 2, this.x, this.y, this.size);
         gradient.addColorStop(0, "pink");
         gradient.addColorStop(0.5, "turquoise");
         gradient.addColorStop(1, "pink");
         ctx.fillStyle = gradient;
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
         ctx.fill();
         ctx.stroke();
         requestAnimationFrame(() => this.update()); // pass ctx to the next frame
      }
   }
}

window.addEventListener('mousemove', function(e){
   const root = new Root(e.clientX, e.clientY, ctx); // use clientX and clientY for mouse position
   root.update(); // context to the update method
})

</script>
```