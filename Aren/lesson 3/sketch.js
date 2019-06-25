///////////// lesson 21

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(200);
//   smooth();
//   noStroke();
//   noLoop()
// }

// function draw(){
//   var x = 0;
//   while (x < width) {
//     var y = 0;
//     while (y < height) {
//       fill(random(225),random(225),random(225))
//       rect(x, y, 58, 60);
//       y = y + 60;
//     }
//     x = x + 60;
//   }
// }

/////////lesson 22

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background('#6AA21E');
//   smooth();
//   noStroke();
//   noLoop();
// }

// function draw(){
//   var x = 0;
//   while (x < width) {
//     var y = 0;
//     while (y < height) {
//         if (random(100) < 1 ) {
//             fill(255, 0, 0, 150);
//           } else {
//             // but usually pick a random gray color
//             fill(random(100, 200),150);
//           }
//       rect(x, y, 30, 30);
//       y = y + 40;
//     }
//     x = x + 40;
//   }
// }

////////23

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background('#86a9e0');
//   smooth();
//   noStroke();
//   noLoop();
// }

// function draw(){
//   var x = 0;
//   while (x < width) {
//     var y = 0;
//     while (y < height) {
//         if (random(100) < 1 ) {
//             fill(255, 0, 0, 150);
//           } else {
//             // but usually pick a random gray color
//             fill(random(100, 200),150);
//           }
//       ellipse(x+20, y+20, 40, 40);
//       y = y + 40;
//     }
//     x = x + 40;
//   }
// }

///////24

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background('#86a9e0');
//   smooth();
//   noStroke();
//   noLoop();
// }

// function draw(){
//   var x = 0;
//   while (x < width) {
//     var y = 0;
//     while (y < height) {
//         if (random(100) < 1 ) {
//             fill(255, 0, 0, random(80));
//           } else {
//             // but usually pick a random gray color
//             fill(random(150, 255),random(150, 255),random(150, 255), random(80));
//           }
//       ellipse(x+20, y+20, 40, 40);
//       y = y + random(10, 30);
//     }
//     x = x + 20;
//   }
// }

/////////25

// Create a jagged line using random

// var step = 10;
// var lastX = -10;
// let lastY;
// let middle;
// var y = 50;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(208);
//     smooth();
//     noLoop();
//     noFill();
// }

// function draw() {
//     stroke(20, 50, 70);
//     middle = height / 2;
//     line(0, middle, width, height / 2);

//     stroke('red');
//     for (i = 0; i <= width; i += 5) {
//         y = random(middle - 10, middle + 10);
//         line(i, y, lastX, lastY);
//         // line(i, height/2, lastX, lastY);
//         lastX = i;
//         lastY = y;
//     }
// }

///////////26

// var step = 10;
// var lastX = -10;
// let lastY;
// let middle;
// let y;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(208);
//     smooth();
//     noLoop();
//     noFill();
// }

// function draw() {
//     var ynoise = random(10);
//     stroke(20, 50, 70);
//     middle = height / 2;
//     line(0, middle, width, height / 2);

//     stroke('red');
//     for (i = 0; i <= width; i += 3) {
//         y = middle - 40 + noise(ynoise) * 80;
//         console.log(y);
//         line(i, y, lastX, lastY);
//         // line(i, height/2, lastX, lastY);
//         lastX = i;
//         lastY = y;
//         ynoise += 0.1;
//     }
// }

////////////27

// var step = 10;
// var lastX = -10;
// var radius = 200;
// let lastY;
// let middle;
// let y;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(208);
//     smooth();
//     noLoop();
//     noFill();
//     strokeWeight(5);
// }

// function draw() {
//     stroke(20, 50, 70);
//     centX = width / 2;
//     centY = height / 2;
//     stroke(0, 30);
//     noFill();
//     ellipse(centX, centY, radius * 2, radius * 2);

//     stroke('red');
//     for (ang = 0; ang <= 360; ang += 5) {
//         var rad = radians(ang);
//         x = centX + (radius * cos(rad));
//         y = centY + (radius * sin(rad));
//         point(x, y);
//     }
// }

////////28

// var step = 10;
// var lastX = -10;
// var radius = 50;
// let lastY;
// let middle;
// let y;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(208);
//     smooth();
//     noLoop();
//     noFill();
//     strokeWeight(5);
// }

// function draw() {
//     stroke(20, 50, 70);
//     centX = width / 2;
//     centY = height / 2;
//     stroke(0, 30);
//     noFill();
//     ellipse(centX, centY, radius * 2, radius * 2);

//     stroke('red');
//     for (ang = 0; ang <= 2000; ang += 4) {
//         radius += 0.5;
//         var rad = radians(ang);
//         x = centX + (radius * cos(rad));
//         y = centY + (radius * sin(rad));
//         ellipse(x, y,random(20),random(20));
//     }
// }

////////////29

// var step = 10;
// var lastX = -10;
// var radius = 50;
// let lastY;
// let middle;
// let y;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(208);
//     smooth();
//     //noLoop();
//     noFill();
//     strokeWeight(0.5);
// }

// function draw() {
//     stroke(20, 50, 70);
//     centX = width / 2;
//     centY = height / 2;
//     var x, y;
//     for (var i = 0; i < 100; i++) {
//         var lastx = -999;
//         var lasty = -999;
//         var radiusNoise = random(10);
//         var radius = 10;

//         stroke(random(20), random(50), random(70), 80);

//         var startangle = int(random(360));
//         var endangle = 1440 + int(random(1440));
//         var anglestep = 5 + int(random(3));

//         for (var ang = startangle; ang <= endangle; ang += anglestep) {
//             radiusNoise += 0.05;
//             radius += 0.5;
//             var thisRadius = radius + (noise(radiusNoise) * 200) - 100;
//             var rad = radians(ang);
//             x = centX + (thisRadius * cos(rad));
//             y = centY + (thisRadius * sin(rad));
//             if (lastx > -999) {
//                 line(x, y, lastx, lasty);
//             }
//             lastx = x;
//             lasty = y;
//         }
//     }

// }

////////////30

// global variables

// let num = 10;
// let angNoise, radiusNoise, xNoise, yNoise;
// let angle;
// let radius = 100;
// let strokeCol = 254;
// let strokeChange = -1;

// function clearBackground() {
//   background(255);
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(208);
//     smooth();
//     // noLoop();
//     noFill();
//     strokeWeight(0.5);
//     clearBackground();
//     angle = -PI/2;
//     angNoise = random(10);
//     radiusNoise = random(10);
//     xNoise = random(10);
//     yNoise = random(10);
// }

// function draw() {
//     radiusNoise += 0.005;
//     radius = (noise(radiusNoise) * 550) +1;

//     angNoise += 0.005;
//     angle += (noise(angNoise) * 6) - 3;
//     if (angle > 360) { angle -= 360; }
//     if (angle < 0) { angle += 360; }

//     // wobble centre
//     xNoise += 0.01;
//     yNoise += 0.01;
//     let centreX = width/2 + (noise(xNoise) * 100) - 50;
//     let centreY = height/2 + (noise(yNoise) * 100) - 50;

//     let rad = radians(angle);
//     let x1 = centreX + (radius * cos(rad));
//     let y1 = centreY + (radius * sin(rad));

//     // opposite end of line
//     let opprad = rad + PI;
//     let x2 = centreX + (radius * cos(opprad));
//     let y2 = centreY + (radius * sin(opprad));

//     noFill();
//     strokeCol += strokeChange;
//     if (strokeCol > 254) { strokeChange *= -1; }
//     if (strokeCol < 0) { strokeChange *= -1; }
//     stroke(strokeCol, 60);
//     strokeWeight(1);
//     line(x1, y1, x2, y2);

//     // disply the wandering centre visible
//     //fill(255,0,0,40);
//     //noStroke();
//     //ellipseMode(CENTER);
//     //ellipse(centreX, centreY, 2, 2);
// }

// function mousePressed() {
//   clearBackground();
// }

///////////31

// Using FFT - Fast Fournier Transform to visualize sound

// var song;
// var button;
// var fft;
// var barWidth;

// var ampHistory = [];

// function preload() {
//   song = loadSound("../audio/imagine-dragons-believer.mp3");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight - 100);
//   angleMode(DEGREES);
//   colorMode(HSB);

//   slider = createSlider(0, 1, 0.5, 0.01);
//   button = createButton("Play");
//   button.mousePressed(togglePlay);
//   // song.loop();
//   fft = new p5.FFT(.6, 128);
//   barWidth = width / 128;
// }

// function togglePlay() {
//   if (!song.isPlaying()) {
//     song.loop();
//     button.html("Pause");
//   } else {
//     song.stop();
//     button.html("Play");
//   }
// }
// var b = 0;
// function draw() {

//   background(random(0, 10), random(0, 10), random(0, 10));
//   song.setVolume(slider.value());
//   var spectrum = fft.analyze()
//   console.log(spectrum);

//   for (var i = 0; i < spectrum.length; i++) {
//     var frqAmp = spectrum[i];
//     var y = map(frqAmp, 0, 256, height, 0);
//     fill(i * 2, 255, 255);
//     // ellipse(i * barWidth, y, barWidth, height - y);
//     rect(i * barWidth, y,b,20)

//     if (i * barWidth == 255) {
//       b = 50
//     }
//     else {
//       b = 20
//     }
//   }
//   console.log(i * barWidth)
// }

//////////////14

// var mic;
// var button;
// var smoothMicLevel=0;

// function setup() {
// 	createCanvas(windowWidth, windowHeight-100);
//     background(0);
// 	button = createButton("Listen");
//     button.mousePressed(toggleListen);
// 	mic = new p5.AudioIn()
//     mic.start();

// }

// function draw(){
// 	background(255);
//     micLevel = mic.getLevel();

// 	console.log(micLevel);

// 	//Lerp smooths out jumpy values
// 	smoothMicLevel = lerp(smoothMicLevel, micLevel,0.2);
// 	noStroke();
// 	fill(255,0,0);
// 	ellipse(width/2, height/2, 300, 2000*smoothMicLevel);
// }

// function toggleListen() {
// 	if (getAudioContext().state !== 'running') {
//     	getAudioContext().resume();
// 		text('listening to audio', width/2, height/2);
// 		button.html("Stop");
// 	} else {
//         text('click Play button to start', width/2, height/2);

//         button.html("Listen");
//     }
// }
///////////33 `MINE`

var song;
var button;
var fft, mic, fft1;
var barWidth;
var r;
var r1 = 0

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  angleMode(DEGREES);
  colorMode(HSB);

  button = createButton("Listen");
  button.mousePressed(toggleListen);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(.5, 64);
  fft.setInput(mic)
  barWidth = width / 64;
  strokeWeight = 8;
}
function toggleListen() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    console.log('listening to audio', width / 2, height / 2);
    button.html("Stop");
  } else {
    console.log('click Play button to start', width / 2, height / 2);

    button.html("Listen");
  }
}

function draw() {
  background(10);

  var spectrum = fft.analyze()

for (var i = 0; i < spectrum.length; i++) {
  var angle = map(i, 0, spectrum.length, 0, 360);
  var amp = spectrum[i];
  var r1 = map(amp, 0, 256, 20, 250);
  // console.log(r1)
//  var newR = int(r1);
//   console.log(newR)
  stroke(i * 10, 255, 255);
  var multiplier =2;
  ellipse(width , height ,  r1*multiplier, r1*multiplier)
  ellipse(width , height/2048,  r1*multiplier,  r1*multiplier)
  ellipse(width /973, height ,  r1*multiplier,  r1*multiplier)
  ellipse(width / 973, height / 2048,  r1*multiplier,  r1*multiplier)

  ellipse(width , height , 50, 50)
  ellipse(width , height/2048, 50, 50)
  ellipse(width /973, height , 50, 50)
  ellipse(width / 973, height / 2048, 50, 50)
  
}
  translate(width / 2, height / 2)
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 20, 250);

    var x = r * cos(angle * 7 );
    var y = r * sin(angle * 7);
    stroke(i * 10, 255, 255);
    line(0, 0, x * 2, y * 2)
    ellipse(x * 2, y * 2, 40, 40)
    ellipseMode(CENTER);
    fill(0);
    ellipse(x * 2, y * 2, 30, 30)
    ellipse(x * 2, y * 2, 10, 10);
    // ellipse(0, 0, r, r);
    ellipse(0, 0, 45, 45);


  }

}

//////////34

// var synth;
// var sloop;
// var freq = 1000;
// var velocity = 0.7;
// var lastX, lastY;

// function setup() {
//     createCanvas(windowWidth, windowHeight - 100);
//     textAlign(CENTER, CENTER);
//     colorMode(HSB, 255);
//     synth = new p5.PolySynth();
//     lastX = width / 2;
//     lastY = height / 2;
// }

// function draw() {
//     background(245);
//     var hue = map(freq, 400, 2000, 0, 255);
//     var diameter = map(velocity, 0.1, 1, height / 20, height / 2);
//     noStroke();
//     fill(hue, 255, 255);
//     ellipse(lastX, lastY, diameter, diameter);

//     fill(30);
//     text("Pitch (Hz): " + freq.toFixed(2) + ", Velocity: " + velocity.toFixed(2), width / 2, height - height / 10);
// }

// function touchStarted() {
//     lastX = mouseX;
//     lastY = mouseY;
//     freq = map(lastX, 0, width, 400, 2000); //random(50, 70);
//     velocity = map(height - lastY, 0, height, 0.1, 1); //random(0.5, 1);
//     // Play synth
//     if (getAudioContext().state !== 'running') {
//         getAudioContext().resume();
//     }
//     synth.noteAttack(freq, velocity, 0);
// }

// function touchEnded() {
//     // Stop synth
//     synth.noteRelease(freq, 0);
// }

////////////34

// var sloop;
//     var selectedScale = [0,2,4,7,9];
//     var numOctaves = 5;
//     var baseOctave = 2;
//     var octaveHeight = 0;
//     var system;
//     var selectInput;
//     var pitchClass;

//     function setup() {
//         createCanvas(windowWidth, windowHeight - 100);

//         // Particles to visualize notes
//         system = new ParticleSystem(createVector(width / 2, 50));
//         // Create a synth to make sound with
//         synth = new p5.PolySynth();
//         // Create SoundLoop repeating every 0.3s
//         sloop = new p5.SoundLoop(soundLoop, 0.3);

//         // Scale selector
//         selectInput = createSelect();
//         selectInput.position(10, 10);
//         for (var scale in scales) {
//             selectInput.option(scale);
//         }
//         selectInput.changed(updateScale);
//         selectInput.value('pentatonic major');
//     }

//     function draw() {
//         background(50);
//         // Get mouse height level
//         stroke(255, 100);
//         octaveHeight = round(numOctaves * (height - mouseY) / height);
//         line(0, height - octaveHeight * height / numOctaves,
//             width, height - octaveHeight * height / numOctaves);
//         // Update particle system
//         system.run();
//         // Play/pause controls
//         textSize(20);
//         fill(255);
//         textAlign(CENTER, CENTER);
//         // tell me the current note pitch
//         // text(pitchClass,width/2, height/2+30);
//         if (sloop.isPlaying) text('Click to Pause', width / 2, height / 2);
//         else text('Click to Play', width / 2, height / 2);
//     }

//     function soundLoop(cycleStartTime) {
//         // Pick a random note, note octave based on mouse height
//         pitchClass = random(selectedScale);
//         var baseNote = (baseOctave + octaveHeight) * 12;
//         var midiNote = baseNote + pitchClass;
//         var freq = midiToFreq(midiNote);
//         // Play sound
//         var velocity = 1; // Between 0-1
//         var duration = this.interval;
//         synth.play(freq, velocity, cycleStartTime, duration);
//         // Add a particle to visualize the note
//         var pitchClassIndex = selectedScale.indexOf(pitchClass);
//         var xpos = width / (selectedScale.length * 2) + pitchClassIndex * width / selectedScale.length;
//         var ypos = height - octaveHeight * height / numOctaves;
//         system.addParticle(xpos, ypos, pitchClass);
//     }

//     function mouseClicked() {
//         if (sloop.isPlaying) {
//             sloop.pause();
//         } else {
//             if (getAudioContext().state !== 'running') {
//                 getAudioContext().resume();
//             }
//             sloop.start();
//         }
//     }

//     function updateScale() {
//         selectedScale = scales[selectInput.value()];
//     }

//     // A simple Particle class
//     var Particle = function(position) {
//         this.acceleration = createVector(0, 0.1);
//         this.velocity = createVector(random(-1, 1), random(-3, -4));
//         this.position = position.copy();
//         this.lifespan = 255;
//         this.note = this.position.x;
//         this.color = [random(255), random(255), random(255)];
//     };

//     Particle.prototype.run = function() {
//         this.update();
//         this.display();
//     };

//     // Method to update position
//     Particle.prototype.update = function() {
//         this.velocity.add(this.acceleration);
//         this.position.add(this.velocity);
//         this.lifespan -= 2;
//     };

//     // Method to display
//     Particle.prototype.display = function() {
//         noStroke();
//         fill(this.color[0], this.color[1], this.color[2], this.lifespan);
//         ellipse(this.position.x, this.position.y, width / 30, width / 30);

//         // fill(255, this.lifespan);
//         // textSize(30);
//         // text(this.note, this.position.x, this.position.y);
//     };

//     // Is the particle still useful?
//     Particle.prototype.isDead = function() {
//         return this.lifespan < 0;
//     };

//     var ParticleSystem = function(position) {
//         this.origin = position.copy();
//         this.particles = [];
//     };

//     ParticleSystem.prototype.addParticle = function(xpos, ypos, pitchClass) {
//         this.particles.push(new Particle(createVector(xpos, ypos)));
//     };

//     ParticleSystem.prototype.run = function() {
//         for (var i = this.particles.length - 1; i >= 0; i--) {
//             var p = this.particles[i];
//             p.run();
//             if (p.isDead()) {
//                 this.particles.splice(i, 1);
//             }
//         }
//     };

// ////////SW 3

