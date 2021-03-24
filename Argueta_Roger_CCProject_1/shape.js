class Shape {

	// Add a counter: either accounting for # of times triangles bounce,
	// or accounting for # of times cannonballs have shot.
	// This counter will affect the gradation of the shape's fill from gray to pink to white.

	// make the base translation values (currently width/2, height/2) variable

	constructor(tc) {
		//if (tc) { // circle
			//
		//}
		if (tc != true) { // triangle
			this.triangle_a_x = -50; // left vertex x
			this.triangle_a_y =  50; // left vertex y
			this.triangle_b_x = 50; // right vertex x
			this.triangle_b_y = 50; // right vertex y
			this.triangle_c_x = 0; // top vertex x
			this.triangle_c_y = -25; // top vertex y

			this.cannon_move = 0; // shift value for cannons' (y) positions
			this.cannonball_move = 0; // shift value for cannonballs' (y) positions

			this.pink_or_light_mag = true; // bool switch for cb_fill
		}
	}

	display() {
		let cb_fill; // fill for every cannonball

		if (this.pink_or_light_mag) {
			cb_fill = color(255, 192, 203); // pink
			this.pink_or_light_mag = false;
		} else {
			cb_fill = color(230, 230, 0); // yellow
			this.pink_or_light_mag = true;
		}

		// top cannon's cannonball
		fill(cb_fill);
		noStroke();
		push();
			translate(width/2 + this.triangle_c_x, height/2 + this.triangle_c_y);
			ellipse(0, (15 - this.cannonball_move), 8, 8);
		pop();

		// top cannon
		fill(0);
		stroke(0);
		push();
			translate(width/2 + this.triangle_c_x, height/2 + this.triangle_c_y);
			ellipse(0, (15 - this.cannon_move), 10, 10);
			ellipse(0, (9 - this.cannon_move), 9, 3);
		pop();

		// left cannon's cannonball
		fill(cb_fill);
		noStroke();
		push();
			translate(width/2 + this.triangle_a_x, height/2 + this.triangle_a_y);
			rotate(radians(-120));
			ellipse(0, (15 - this.cannonball_move), 8, 8);
		pop();

		// left cannon
		fill(0);
		stroke(0);
		push();
			translate(width/2 + this.triangle_a_x, height/2 + this.triangle_a_y);
			rotate(radians(-120));
			ellipse(0, (15 - this.cannon_move), 10, 10);
			ellipse(0, (9 - this.cannon_move), 9, 3);
		pop();

		// right cannon's cannonball
		fill(cb_fill);
		noStroke();
		push();
			translate(width/2 + this.triangle_b_x, height/2 + this.triangle_b_y);
			rotate(radians(120));
			ellipse(0, (15 - this.cannonball_move), 8, 8);
		pop();

		// right cannon
		fill(0);
		stroke(0);
		push();
			translate(width/2 + this.triangle_b_x, height/2 + this.triangle_b_y);
			rotate(radians(120));
			ellipse(0, (15 - this.cannon_move), 10, 10);
			ellipse(0, (9 - this.cannon_move), 9, 3);
		pop();

		// draw the shape (triangle)
		push();
			fill(127);
			stroke(0);
			translate(width/2, height/2);
			beginShape();
				vertex(this.triangle_a_x, this.triangle_a_y);
				vertex(this.triangle_b_x, this.triangle_b_y);
				vertex(this.triangle_c_x, this.triangle_c_y);
			endShape(CLOSE);
		pop();
	}

	//create method that changes direction that triangle is moving/translating

	cannon_motion() {
		// method which makes cannons protrude from vertices
		if (this.cannon_move < 20) {
			this.cannon_move += 0.5;
		}

		// also move the cannonballs inside the cannons
		if (this.cannonball_move < 20) {
			this.cannonball_move += 0.5;
		}
	}

	cannon_shoot() {
		// method which makes the cannons shoot cannonballs
		if (this.cannonball_move >= 20) { // shoot when cannonball moves into position
			this.cannonball_move += 4;
		}

		if (this.cannonball_move > height/2) { // load a new cannonball (same cannonball)
			this.cannonball_move = 20; // reset cannonball in the loaded position, 20 pixels from cannon/cannonball origin
		}
	}

	triangle_shake(tc) { // need tc parameter to see if it's a triangle and then apply method
		let vertex_shift = random(2, -2); // will shift all vertices by the same random value
		if (tc != true) {
			if (this.cannonball_move >= 25 && this.cannonball_move <= height/4) { // sometime between two cannonball (shot) positions
				this.triangle_a_x += vertex_shift;
				this.triangle_a_y += vertex_shift;
				this.triangle_b_x += vertex_shift;
				this.triangle_b_y += vertex_shift;
				this.triangle_c_x += vertex_shift;
				this.triangle_c_y += vertex_shift;
			}
		}
	}

}