// declare an array of shapes
let triangle_or_circle;
let protagonist_shape;

function setup() {
	createCanvas(900, 900);
	triangle_or_circle = false;
	// for every vertical space (randomly spaced out by at least 120 pixels)
		// for every horizontal space (randomly spaced out by at least 100 pixels)
			// create a new object of the Shape class (input for x/y parameters: specific horizontal space)
			// push it to the array of shapes
	protagonist_shape = new Shape(triangle_or_circle);
}

function draw() {
	background(192, 252, 255);
	// for shape in array of shapes
		protagonist_shape.display(); // change to display shape in array of shapes
		protagonist_shape.cannon_motion(); // change similar to display()
		// for every int (1-9)
			protagonist_shape.cannon_shoot(4); // change similar to display(); change parameter to int
		protagonist_shape.triangle_shake(); // change similar to display()
}

