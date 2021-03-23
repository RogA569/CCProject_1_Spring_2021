let triangle_or_circle;
let protagonist_shape;

function setup() {
	createCanvas(900, 900);
	triangle_or_circle = false;
	protagonist_shape = new Shape(triangle_or_circle);
}

function draw() {
	background(255);
	protagonist_shape.display();
	//find a way to slow down this motion...
	protagonist_shape.cannon_motion();
}

