///////////36

// Radial Pattern Basic

// let k = 7 / 8.0;
// let scaleIt = 200;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(20);
//     colorMode(HSB);
//     strokeWeight(0.2);
//     smooth();
// }

// function draw() {
//     translate(width / 2, height / 2);
//     //scale(width/2, height/2);
//     let t = frameCount / 10.0;
//     let x = cos(k * t) * sin(t) * scaleIt;
//     let y = cos(k * t) * cos(t) * scaleIt;
//     stroke(random(255),random(255),random(255));
//     line(0, 0, x+random(10), y+random(10));
// }

////////////37 pattern 1

// Radial Pattern 1

// var frames = 200
// var num = 30; // try numbers up to 40
// var theta = 0;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0);
// }

// function draw() {
//     background(20);
//     fill(255, 30);
//     stroke(random(255),random(255),random(255));
//     translate(width / 2, height / 2);
//     for (i = 0; i < num; i++) {
//         push();
//         let offSet = TWO_PI / num * i;
//         rotate(offSet);
//         sz = width * .15;
//         x = map(sin(theta), -1, 1, sz, width * .2);
//         translate(x, 0);
//         push();
//         rotate(theta);
//         ellipse(0, 0, sz, sz * 2);
//         ellipse(0, 0, sz * .7, sz * 2 * .7);
//         if (i % 2 == 0) {
//             ellipse(0, 0, sz, sz * 2);
//         } else {
//             ellipse(0, 0, sz * .7, sz * 2 * .7);
//         }

//         pop();
//         pop();
//     }
//     theta += TWO_PI / frames;
// }

/////38 pattern-1 sound

// Radial Pattern 1 with Sound

// var frames = 240;
// var num = 30; // try numbers up to 40
// var theta = 0;
// var wave;
// var frequency;
// var playing;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0);

//     wave = new p5.Oscillator();
//     wave.setType('sine');
// }

// function draw() {
//     background(20);
//     fill(random(255),random(255),random(255));
//     stroke(random(255),random(255),random(255));
//     translate(width / 2, height / 2);
//     for (i = 0; i < num; i++) {
//         push();
//         let offSet = TWO_PI / num * i;
//         rotate(offSet);
//         sz = width * .15;
//         x = map(sin(theta), -1, 1, sz, width * .2);

//         // change the frequency of synth
//         wave.freq(x*1);

//         translate(x, 0);
//         push();
//         rotate(theta);
//         ellipse(0, 0, sz, sz * 2);
//         ellipse(0, 0, sz * .7, sz * 2 * .7);
//         if (i % 2 == 0) {
//             ellipse(0, 0, sz, sz * 2);
//         } else {
//             ellipse(0, 0, sz * .7, sz * 2 * .7);
//         }
//         pop();
//         pop();
//     }
//     theta += TWO_PI / frames;
// }

// function togglePlay() {
// 	if (!playing) {
//         loop();
// 		wave.start();
// 		wave.amp(1, .25);
// 		// second number fades in the amplitude by the duration specified
// 		playing = true;
//         console.log("Start Loop");
// 	} else {
//         noLoop();
// 		wave.amp(0, .25);
// 		playing = false;
//         console.log("Stop Loop");

// 	}
// }

// function mousePressed() {
//     togglePlay();
// }

////////39

// Radial Pattern 2

// var frames = 200
// var num = 40; // try numbers up to 40
// let theta = 0;
// let isLooping;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0);
// }

// function draw() {
//     background(20);
//     fill(255, 30);
//     stroke(255, 50);
//     translate(width / 2, height / 2);
//     for (i = 0; i < num; i++) {
//         push();
//         let offSet = TWO_PI / num * i;
//         rotate(offSet);
//         sz = map(sin(theta), -1, 1, width*.15, width*.2);
//         x = map(sin(theta), -1, 1, sz, width * .2);
//         translate(x, 0);
//         push();
//         rotate(theta);
//         stroke(200);

//         if (i%2==0) {
//           ellipse(0, 0, sz, sz*2);
//           px = cos(theta)*sz/2;
//           py = sin(theta)*sz;
//           sz2 = 20;
//           strokeWeight(2);
//           ellipse(px, py, sz2, sz2);
//           strokeWeight(1);
//         } else {
//             fill(255,20);
//             noStroke();
//             ellipse(0, 0, sz*.7, sz*2*.7);
//             px = cos(theta+PI)*sz*.35;
//             py = sin(theta+PI)*sz*.7;
//             sz2 = 5;
//             fill(255);
//             ellipse(px, py, sz2, sz2);
//             noFill();
//         }
//         pop();
//         pop();
//     }
//     theta += TWO_PI / frames;
// }

// function togglePlay() {
//     if (isLooping === false) {
//         loop();
//         isLooping=true;
//         console.log("Start Loop");
//     } else {
//         noLoop();
//         isLooping=false;
//         console.log("Stop Loop");
//     }
// }

// function mousePressed() {
//     togglePlay();
// }

/////////40

// Radial Pattern 2 with Sound

// var frames = 250
// var num = 30; // try numbers up to 40
// var theta = 0;
// var wave;
// var playing;
// var frequency;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0);

//     wave = new p5.Oscillator();
//     wave.setType('sine');
//     // frameRate(8);
// }

// function togglePlay() {
// 	if (!playing) {
//         loop();
// 		wave.start();
// 		wave.amp(1, .25);
// 		// second number fades in the amplitude by the duration specified
// 		playing = true;
//         console.log("Start Loop");
// 	} else {
//         noLoop();
// 		wave.amp(0, .25);
// 		playing = false;
//         console.log("Stop Loop");

// 	}
// }

// function draw() {
//     background(20);
//     fill(random(255),random(255),random(255));
//     stroke(255, 50);
//     translate(width / 2, height / 2);
//     for (i = 0; i < num; i++) {
//         push();
//         let offSet = TWO_PI / num * i;
//         rotate(offSet);
//         sz = map(sin(theta), -1, 1, width*.15, width*.2);
//         x = map(sin(theta), -1, 1, sz, width * .2);
//         translate(x, 0);
//         push();
//         rotate(theta);
//         stroke(random(255),random(255),random(255));

//         if (i%2==0) {
//           line(0, 0, sz, sz*2);
//           px = cos(theta)*sz/2;
//           py = sin(theta)*sz;
//           sz2 = 20;
//           strokeWeight(2);
//           // change the frequency of synth
//           wave.freq(px*4);
//           var vol = map(x, 100,300,0,1)
//           console.log(vol)
//           wave.amp(vol);

//           ellipse(px, py, sz2, sz2);
//           strokeWeight(1);
//         } else {
//             fill(255,20);
//             noStroke();
//             line(0, 0, sz*.7, sz*2*.7);
//             px = cos(theta+PI)*sz*.35;
//             py = sin(theta+PI)*sz*.7;
//             sz2 = 5;
//             fill(random(255),random(255),random(255));
//             ellipse(px, py, sz2, sz2);
//             noFill();
//         }
//         pop();
//         pop();
//     }
//     theta += TWO_PI / frames;
// }

// function mousePressed() {
//     togglePlay();
// }

///////54

// Exercise 54
// we will use setInverval(function, amount of time) to achieve it.


// var pickFrames;
// var x = 0;
// var isPlaying  = false ;
// var interval;

// function setup() {
//     createCanvas(windowWidth, windowHeight-100);
//     background(0);

//     pickFrames = createP('pickFrames');


//     button = createButton('Play');
//     button.mousePressed(togglePlay)
// }

// function draw() {
//     background(20);
//     fill(255, 30);
//     stroke(255, 80);
//     line(x, 0, x, height)
//     x +=3;
//     if (x > width) {
//         x = 0;
//     }
// }

// function togglePlay() {
//     if (isPlaying) {
//        clearInterval(interval)
//        isPlaying = false;
//     } else {
//     interval=setInterval(makeNote,500);
//     isPlaying = true;
//     }
// }

// function makeNote() {
//     pickFrames.html(frameCount);
// }
