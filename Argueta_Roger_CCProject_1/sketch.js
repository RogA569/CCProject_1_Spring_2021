function setup() {
	createCanvas(900, 900);
}

function draw() {
	ready_shape();
}

function ready_shape() {
	// to begin to change to circle, use curveVertex()
	// find a way to make the fill a plaid texture
	beginShape();
		vertex((width/2) - 50, (height/2) - 50);
		vertex((width/2) + 50, (height/2) - 50);
		vertex((width/2) + 50, (height/2) + 50);
		vertex((width/2) - 50, (height/2) + 50);
	endShape(CLOSE);
}