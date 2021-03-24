let triangle_or_circle;
let protagonist_shape;

function setup() {
	createCanvas(900, 900);
	triangle_or_circle = false;
	protagonist_shape = new Shape(triangle_or_circle);
}

function draw() {
	background(192, 252, 255);
	protagonist_shape.display();
	protagonist_shape.cannon_motion();
	protagonist_shape.cannon_shoot();
	protagonist_shape.triangle_shake(triangle_or_circle);
}

