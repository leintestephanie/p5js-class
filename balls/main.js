var diameter = 40;

function setup() {
	createCanvas(900,500);
	background(100);
}

function draw() {

	for (var xpos = 30; xpos < width; xpos += 40) {
		for (var ypos = 30; ypos < height; ypos += 40) {
			ellipse(xpos, ypos, diameter, diameter);
		}
	}
}