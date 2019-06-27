
///////////33 `MINE`

var song;
var button;
var fft, mic;
var barWidth;
var r;
var r1 = 0
// let IMGimg;

// function preload() {
//   console.log('aaaaa');
//   IMGimg = loadImage('../share/lol.png');
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
 col = color(10);
  // button = createButton("Listen");
  // button.mousePressed(toggleListen);
  // button.style('background-color', col);
  // button.position(0,height);
  
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(.5, 64);
  fft.setInput(mic)
  barWidth = width / 64;

}
// function toggleListen() {
//   if (getAudioContext().state !== 'running') {
//     getAudioContext().resume();
//     console.log('listening to audio', width / 2, height / 2);
//     button.html("Listening...");
//   } else {
//     console.log('click Play button to start', width / 2, height / 2);

//     button.html("Listen");
//   }
// }

function draw() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();}
  background(10);

  var spectrum = fft.analyze()

for (var i = 0; i < spectrum.length; i++) {
  var angle = map(i, 0, spectrum.length, 0, 360);
  var amp = spectrum[i];
  var r1 = map(amp, 0, 256, 20, 250);
  
  stroke(i * 10, 255, 255);

  // image(IMGimg, 0, 0, 3*r1, 3*r1)


  var multiplier =3;
  ellipse(width , height ,  r1*multiplier, r1*multiplier)
  ellipse(width , height/2048,  r1*multiplier,  r1*multiplier)
  ellipse(width /1123, height ,  r1*multiplier,  r1*multiplier)
  ellipse(width / 1123, height / 2048,  r1*multiplier,  r1*multiplier)

  ellipse(width , height , 50, 50)
  ellipse(width , height/2048, 50, 50)
  ellipse(width /1123, height , 50, 50)
  ellipse(width / 1123, height / 2048, 50, 50)
  
  
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
    ellipse(0, 0, 45, 45);
    // image(IMGimg, -22.5, -22.5, 45, 45)


  }

}
