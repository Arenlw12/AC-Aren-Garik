
////////6

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(12);
// }
// function draw() {
//   background(0);
//   var lineY = random(height);

//   strokeWeight(random(200));
//   stroke(random(255),random(50,100));
//   line(0,lineY, width,lineY);

// // let's create 4 lines for each Loop
// // next we will do this an easier way

//   strokeWeight(random(200));
//   stroke(random(255),random(50,100));
//   line(0,lineY, width,lineY);

//   strokeWeight(random(200));
//   stroke(random(255),random(50,100));
//   line(0,lineY, width,lineY);

//   strokeWeight(random(200));
//   stroke(random(255),random(50,100));
//   line(0,lineY, width,lineY);
// }
// function mousePressed() {
// noLoop();
// }
// function mouseReleased() {
// loop();
// }

///////////////7

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(12);
// }

// function draw() {
//   background(0);
//   var lineY = random(height);
//   // using a for loop to create multiple lines

// for (i = 0; i <10; i++) {
//   strokeWeight(random(400));
//   stroke(random(200),random(50,150));
//   line(0,lineY, width,lineY);
//   }
// }

// function mousePressed() {
// noLoop();
// }

// function mouseReleased() {
// loop();
// }

/////////////8

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(12);
// }

// function draw() {
//   background(0);
//   var lineX = random(width);
//   // using a for loop to create multiple lines

// for (i = 0; i <10; i++) {
//   strokeWeight(random(400));
//   stroke(random(200),random(50,150)); // two values in random creates a range
//   line(lineX,0, lineX,height);
//   }
// }

// function mousePressed() {
// noLoop();
// }

// function mouseReleased() {
// loop();
// }

//////////Bonus 1

// function setup() {
//   createCanvas(windowWidth, windowHeight);
 
// }

// function draw() {
//   strokeCap(SQUARE)

 
//   ///////2
//   for (i = 0; i < 10; i++) {
//     strokeWeight(50)
//     stroke("black")
//     line(width-(width / 2 * i/9) , height,width-(width / 2 * i/9) , height/2.24)
//   }
//   ///////3
//   for (i = 0; i < 7; i++) {
//     strokeWeight(50)
//     stroke("black")
//     line(width/2-80 - 150*i,0,width/2- 10,height/10 + 160*i)
  
//   }
//   noStroke()
//   rect(width/2 - 25, -50 ,width/2,height/2 - 70)
//   stroke(0)
//   ///////1
//   for (i = 0; i < 5; i++) {
//     strokeWeight(50)
//     stroke("black")
//     line(width / 2, 110 * i, width, 110 * i)
//   }
//   ///////4
//   for (i = 0; i < 13; i++) {
//     strokeWeight(50)
//     stroke("black")
//     line(width/2 - 145*i,height,width/2- 80*i,height - 83*i)
  
//   }
  
// }

////////song
 
// var song;

// function preload() {
//   song = loadSound("../audio/imagine-dragons-believer.mp3");
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight-100);
//     background(51);
//     slider = createSlider(0,1,0.5,0.01);
//     button = createButton("Play");
//     button.mousePressed(togglePlay);
// 	// song.loop();
// }

// function togglePlay() {
//     if (!song.isPlaying()){
//         song.loop();
//         button.html("Pause");
//     } else {
//         song.stop();
//         button.html("Play");
//     }
// }

// function draw(){
//     background(0);
//     song.setVolume(slider.value());
// }

///////song 2

// var song;
// var button;
// var amplitude;

// function preload() {
//   song = loadSound("../audio/myBeat.mp3");
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight-100);
//     background(51);
//     slider = createSlider(0,1,0.5,0.01);
//     button = createButton("Play");
//     button.mousePressed(togglePlay);
// 	// song.loop();
//     amplitude = new p5.Amplitude();
// }

// function togglePlay() {
//     if (!song.isPlaying()){
//         song.loop();
//         button.html("Pause");
//     } else {
//         song.stop();
//         button.html("Play");
//     }
// }

// function draw(){
//     background(0);
//     song.setVolume(slider.value());

//     var vol = amplitude.getLevel();
//     var diam = map(vol, 0, 1, 10, 3*height);
//     fill(255, 0, 0,200);
//     ellipse(width/2, height/2, diam, diam);
// }

////////microphone

// var mic;
// var smoothMicLevel=0;

// function setup() {
// 	createCanvas(windowWidth, windowHeight-100);
//     background(0);

// 	mic = new p5.AudioIn()
//     mic.start();

// }
// function draw(){
// 	background(0);
//     micLevel = mic.getLevel();

// 	// console.log(micLevel);

// 	//Lerp smooths out jumpy values
// 	smoothMicLevel = lerp(smoothMicLevel, micLevel,0.2);
// 	fill(255);
// 	ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
// }

/////////example 15

// var wave;
// var playing;
// var frequency;

// function setup() {
//     createCanvas(windowWidth, windowHeight-100);
//     background(0);

// 	wave = new p5.Oscillator();
// 	wave.setType('sine');
// 	button = createButton("Play");
// 	button.mousePressed(playPause);
// 	slider = createSlider(100,1200,440);
// }

// function playPause() {
// 	if (!playing) {
// 		wave.start();
// 		wave.amp(1, .25);
// 		// second number fades in the amplitude by the duration specified
// 		wave.freq(440);
// 		playing = true;
// 	} else {
// 		wave.amp(0, .25);
// 		playing = false;
// 	}
// }

// function draw(){
// 	wave.freq(slider.value());

// 	if (playing) {
// 		background(255,0,245);
// 	} else {
// 		background(51);
// 	}
// }

//////////example 16

// var song;
// var button;
// var amp;

// var ampHistory = [];

// function preload() {
//   song = loadSound("../audio/imagine-dragons-believer.mp3");
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight-100);
//     background(0);

// 	slider = createSlider(0,1,0.5,0.01);
//     button = createButton("Play");
//     button.mousePressed(togglePlay);
// 	// song.loop();
//     amp = new p5.Amplitude();
// }

// function togglePlay() {
//     if (!song.isPlaying()){
//         song.loop();
//         button.html("Pause");
//     } else {
//         song.stop();
//         button.html("Play");
//     }
// }

// function draw(){
//     background(0);
//     song.setVolume(slider.value());

//     var vol = amp.getLevel();
// 	ampHistory.push(vol);
//     var diam = map(vol, 0, 1, 10, 100);
// 	beginShape();
// 	stroke(250,150);
// 	noFill();
// 	for (var i = 0; i < ampHistory.length; i++) {
// 		var y = map(ampHistory[i], 0, 1, height, 0);
// 		vertex(i,y-height/2);
// 	}
// 	endShape();
// 	if (ampHistory.length > width) {
// 	    ampHistory.splice(0, 1);
// 	}
// 	// stroke(255, 0, 0);
// 	// line(ampHistory.length, 0, ampHistory.length, height);
// }

/////////for loops

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0);
//     colorMode(HSB);
//     // smooth();
// }

// function draw(){
//     noFill();
//     strokeWeight(.25);
//     stroke(255, 100);

//     for (i = 0;i < 200; i+=1) {
//       ellipse(100 + i*4, 100 + i*4, 100+i*4, 100-i);
//     //   ellipse(width/2 + i, height/2-i, 100+i*5, 100-i*5);
//     }
// }

//////////for loops 2,rotates

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background("#6AA21E");
//     colorMode(HSB);
//     // smooth();
// }

// function draw(){
//     noFill();
//     strokeWeight(.25);
//     stroke(255, 100);

//     for (i = 0;i < 300; i+=3) {
//         fill(random(255));
//         rect(height/2,10,50, 5);

//         fill(255, 0, 0);
//         rect(height/2+50,10,10, 5);

//         rotate(0.02);
//       // ellipse(width/2 + i, height/2-i, 100+i*5, 100-i*5);
//     }
// }

////////for loops 3,rotates 2

// var r = 0;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(10);
//     smooth();
//     noStroke();
// }

// function draw(){
//     fill(255);
//     rotate(r);
//     var circle_size = random(5, 15);
//     ellipse(100 + r, 10, circle_size, circle_size);
//     r = r + random(1,10);
// }

/////////for loops 4,rotates 3

// var r = 0;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(10);
//     smooth();
//     noStroke();
// }

// function draw(){
//     translate(width/2, height/2);
//     fill(random(255),random(255),random(255),random(255));
//     rotate(r);
//     var circle_size = random(5, 15);
//     ellipse(100 + r, 10, circle_size, circle_size);
//     r = r + 0.5;
// }