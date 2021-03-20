let triangle_or_circle;
let protagonist_shape;
let top_cannon;

function setup() {
	createCanvas(900, 900);
	triangle_or_circle = false;
	protagonist_shape = new Shape(triangle_or_circle);
	top_cannon = new Cannon(width/2, height/2 - 25);
}

function draw() {
	background(255);
	top_cannon.display();
	protagonist_shape.display();
	top_cannon.display();
}

/*function ready_shape() {
	// to begin to change to circle, use curveVertex()
	// find a way to make the fill a plaid texture
	let triangle_a_x = (width/2) - 50;
	let triangle_a_y = (height/2) + 50;
	let triangle_b_x = (width/2) + 50;
	let triangle_b_y = (height/2) + 50;
	let triangle_c_x = (width/2);
	let triangle_c_y = (height/2) - 25;

	beginShape();
		fill(127);
		vertex(triangle_a_x, triangle_a_y);
		vertex(triangle_b_x, triangle_b_y);
		vertex(triangle_c_x, triangle_c_y);
	endShape(CLOSE);
} */


class Cannon {
	// what if the cannons are on the side vertices?
	constructor(v_x, v_y) {
		
		this.pos_x = v_x;
		this.pos_y = v_y + 15;
	}

	display() {
		fill(0);
		ellipse(this.pos_x, this.pos_y, 10, 10);
		ellipse(this.pos_x, this.pos_y-6, 9, 3);
	}
}

class Shape {

	// BRING IN THE CANNONS!!!

	constructor(tc) {
		//if (tc) { // circle
			//
		//}
		if (tc != true) { // triangle
			this.triangle_a_x = (width/2) - 50;
			this.triangle_a_y = (height/2) + 50;
			this.triangle_b_x = (width/2) + 50;
			this.triangle_b_y = (height/2) + 50;
			this.triangle_c_x = (width/2);
			this.triangle_c_y = (height/2) - 25;
		}
	}

	display() {
		beginShape();
			fill(127);
			vertex(this.triangle_a_x, this.triangle_a_y);
			vertex(this.triangle_b_x, this.triangle_b_y);
			vertex(this.triangle_c_x, this.triangle_c_y);
		endShape(CLOSE);
	}
}