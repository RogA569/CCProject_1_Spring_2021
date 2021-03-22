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