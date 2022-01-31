// Roger Argueta

/* INSTRUCTIONS FOR NEXT ITERATION
	Add touch screen functionality
	To make circles rise, tap and hold anywhere on the screen
	(may already be functional).
*/

let shapes; // an array of shapes
let triangle_or_circle; // boolean value; false for triangle, true for circle

function setup() {
	createCanvas(900, 900);
	triangle_or_circle = false;
	shapes = [];
	for (let y = random(90, 115); y < height; y += random(120, 200)) { 
		for (let x = random(20, 120); x < width; x += random(200, 350)) { 
			let new_shape = new Shape(triangle_or_circle, x, y); // each shape has a random x and y
			shapes.push(new_shape); // pushing each new shape to the array of shapes
		}
	}
}

function draw() {
	background(192, 252, 255);
	// for shape in array of shapes
	for (let shape = 0; shape < shapes.length; shape++) { // going through each shape in the array and calling the following
		shapes[shape].display();
		shapes[shape].cannon_motion();
		shapes[shape].cannon_shoot(4);
		shapes[shape].triangle_shake();
	}
}

