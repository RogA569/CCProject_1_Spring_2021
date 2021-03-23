class Shape {

	constructor(tc) {
		//if (tc) { // circle
			//
		//}
		if (tc != true) { // triangle
			this.triangle_a_x = -50;
			this.triangle_a_y =  50;
			this.triangle_b_x = 50;
			this.triangle_b_y = 50;
			this.triangle_c_x = 0;
			this.triangle_c_y = -25;

			this.cannon_move = 0;
		}
	}

	display() { //after cannons (and their methods) are set, put them before shape is created
		push();
			translate(width/2, height/2);
			beginShape();
				fill(127);	
				vertex(this.triangle_a_x, this.triangle_a_y);
				vertex(this.triangle_b_x, this.triangle_b_y);
				vertex(this.triangle_c_x, this.triangle_c_y);
			endShape(CLOSE);
		pop();

		//top cannon
		fill(0);
		push();
			translate(width/2 + this.triangle_c_x, height/2 + this.triangle_c_y);
			ellipse(0, (15 - this.cannon_move), 10, 10);
			ellipse(0, (9 - this.cannon_move), 9, 3);
		pop();

		// left cannon
		fill(0);
		push();
			translate(width/2 + this.triangle_a_x, height/2 + this.triangle_a_y);
			rotate(radians(-120));
			ellipse(0, (15 - this.cannon_move), 10, 10);
			ellipse(0, (9 - this.cannon_move), 9, 3);
		pop();

		//right cannon
		fill(0);
		push();
			translate(width/2 + this.triangle_b_x, height/2 + this.triangle_b_y);
			rotate(radians(120));
			ellipse(0, (15 - this.cannon_move), 10, 10);
			ellipse(0, (9 - this.cannon_move), 9, 3);
		pop();
	}

	cannon_motion() {
		// method which makes cannons protrude from vertices
		while (this.cannon_move <= 15) {
			this.cannon_move += 0.0000001;
		}
	}
}