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


