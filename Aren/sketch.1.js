var song;
var button;
var fft;
var barWidth;

var ampHistory = [];

function preload() {
    song = loadSound("../audio/imagine-dragons-believer.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 100);
    angleMode(DEGREES);
    colorMode(HSB);

    slider = createSlider(0, 1, 0.5, 0.01);
    button = createButton("Play");
    button.mousePressed(togglePlay);
    // song.loop();
    fft = new p5.FFT(.6, 32);
    barWidth = width / 32;
}

function togglePlay() {
    if (!song.isPlaying()) {
        song.loop();
        button.html("Pause");
    } else {
        song.stop();
        button.html("Play");
    }
}

function draw() {
    background(0);
    song.setVolume(slider.value());
    var spectrum = fft.analyze()
    console.log(spectrum);

    for (var i = 0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0, 256, height, 0);
        fill(i * 2, 255, 255);
        rect(i * barWidth, y, barWidth, height - y);
    }
}