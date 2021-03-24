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
			this.cannonball_move = 0;

			this.pink_or_light_mag = true; // bool switch for cb_fill
		}
	}

	display() {
		let cb_fill; // fill for every cannonball

		if (this.pink_or_light_mag) {
			cb_fill = color(255, 192, 203); // pink
			this.pink_or_light_mag = false;
		} else {
			cb_fill = color(100, 100, 0);
			this.pink_or_light_mag = true;
		}

		// make the base translation values (currently width/2, height/2) variable

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

		/*// TESTING CANNONBALL
		// fill(pink);
		fill(255, 0, 0);
		noStroke();
		push();
			translate(width/2 + this.triangle_c_x, height/2 + this.triangle_c_y);
			ellipse(0, (15 - this.cannonball_move), 8.5, 8.5);
		pop();*/
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
		// if cannonball_move reaches a certain point, reset it
		if (this.cannonball_move >= 20) {
			this.cannonball_move += 4;
		}

		//checkEdges(), for cannonballs
		//if 
	}

}