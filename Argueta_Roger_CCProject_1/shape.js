class Shape {

	constructor(tc_) { //add an x_ and y_ parameter // takes in boolean parameter; true for circle, false for triangle
		
		this.tc = tc_; // make parameter into variable to change to true when program needs to

		// a counter that will change this shape once it reaches 9
		// also affects shape's fill as it increases
		this.cannonballs_shot_counter = 0;

		// a pretty dark pink to start
		this.shape_fill_hsb = [350, 25, 50];
		this.shape_fill = color('hsb('+ str(this.shape_fill_hsb[0]) + ', ' + str(this.shape_fill_hsb[1]) + '%, '+ str(this.shape_fill_hsb[2]) + '%)'); 

		if (this.tc != true) { // triangle
			this.triangle_a_x = -50; // change to whatever the x_ parameter is // left vertex x
			this.triangle_a_y =  50; // change to whatever the y_ parameter is // left vertex y
			this.triangle_b_x = 50; // change based on this.triangle_a_x // right vertex x
			this.triangle_b_y = 50; // change based on this.triangle_a_x // right vertex y
			this.triangle_c_x = 0; // change based on this.triangle_a_x // top vertex x
			this.triangle_c_y = -25; // change based on this.triangle_a_x // top vertex y

			this.cannon_move = 0; // shift value for cannons' (y) positions
			this.cannonball_move = 0; // shift value for cannonballs' (y) positions

			this.pink_or_white = true; // bool switch for cb_fill
		}

		/*if (this.tc) { // circle; perhaps user inputs tc_ as true
			this.ellipse_posX = 0;
			this.ellipse_posY = 0;
		}*/
	}

	display() {
		if (this.tc != true) {
			let cb_fill; // fill for every cannonball

			if (this.pink_or_white) {
				cb_fill = color(255, 192, 203); // pink
				this.pink_or_white = false;
			} else {
				cb_fill = color(255, 255, 255); // white
				this.pink_or_white = true;
			}

			colorMode(RGB); // always start with RGB

			// left cannon's cannonball
			fill(cb_fill);
			noStroke();
			push();
				translate(width/2 + this.triangle_a_x, height/2 + this.triangle_a_y); // change to translation by this.triangle_a_x and y
				rotate(radians(-120));
				ellipse(0, (15 - this.cannonball_move), 8, 8);
			pop();

			// left cannon
			fill(255, 255, 77);
			stroke(0);
			push();
				translate(width/2 + this.triangle_a_x, height/2 + this.triangle_a_y); // change same as left cannonball
				rotate(radians(-120));
				ellipse(0, (15 - this.cannon_move), 10, 10);
				ellipse(0, (9 - this.cannon_move), 9, 3);
			pop();

			// right cannon's cannonball
			fill(cb_fill);
			noStroke();
			push();
				translate(width/2 + this.triangle_b_x, height/2 + this.triangle_b_y); // change to translation by this.triangle_b_x and y
				rotate(radians(120));
				ellipse(0, (15 - this.cannonball_move), 8, 8);
			pop();

			// right cannon
			fill(255, 255, 77);
			stroke(0);
			push();
				translate(width/2 + this.triangle_b_x, height/2 + this.triangle_b_y); // change same as right cannonball
				rotate(radians(120));
				ellipse(0, (15 - this.cannon_move), 10, 10);
				ellipse(0, (9 - this.cannon_move), 9, 3);
			pop();

			// top cannon's cannonball
			fill(cb_fill);
			noStroke();
			push();
				translate(width/2 + this.triangle_c_x, height/2 + this.triangle_c_y); // change to translation by this.triangle_c_x and y
				ellipse(0, (15 - this.cannonball_move), 8, 8);
			pop();

			// top cannon
			fill(255, 255, 77);
			stroke(0);
			push();
				translate(width/2 + this.triangle_c_x, height/2 + this.triangle_c_y); // change same as top cannonball
				ellipse(0, (15 - this.cannon_move), 10, 10);
				ellipse(0, (9 - this.cannon_move), 9, 3);
			pop();

			// draw the shape (triangle)
			push();
				colorMode(HSB); //switch to HSB for following fill
				fill(this.shape_fill);
				stroke(0);
				translate(width/2, height/2); // remove
				beginShape();
					vertex(this.triangle_a_x, this.triangle_a_y);
					vertex(this.triangle_b_x, this.triangle_b_y);
					vertex(this.triangle_c_x, this.triangle_c_y);
				endShape(CLOSE);
			pop();
		} // end of (this.tc != true)

		if (this.tc) {
			//draw the shape (circle)
			push();
				colorMode(HSB); // switch to HSB for following fill
				fill(this.shape_fill);
				noStroke();

				// will be in the general area of triangle; not exactly though
				translate(width/2 + this.triangle_c_x, height/2 + (this.triangle_a_y - this.triangle_c_y)); // remove width/2 and height/2

				ellipse(this.ellipse_posX, this.ellipse_posY, 100, 100);
			pop();
			if (mouseIsPressed) { // if user presses mouse, circle rises up by 5 pixels
				this.ellipse_posY -= 5;

				this.shape_fill = color(255, 255, 255); // change to a white circle
			}
		} // end of (this.tc) if statement
	} // end of display()

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

	cannon_shoot(pixel_distance) { // takes parameter which will set the increment for the cannonballs
		// method which makes the cannons shoot cannonballs
		if (this.tc != true) {
			if (this.cannonball_move >= 20) { // shoot when cannonball moves into position
				this.cannonball_move += pixel_distance;
			}

			// load a new cannonball (same cannonball)
			// (height/1.5) gives cannonballs shooting distance to cover canvas from anywhere
			if (this.cannonball_move > (height/1.5)) { 
				this.cannonballs_shot_counter++; // first increment counter
				this.cannonball_move = 20; // reset cannonball in the loaded position, 20 pixels from cannon/cannonball origin
			}

			if (this.cannonballs_shot_counter == 9) { // once cannonballs_shot_counter reaches 9, change shape to circle
				this.tc = true;

				// set initial x and y values for this new shape
				this.ellipse_posX = 0;
				this.ellipse_posY = 0;

				this.cannonballs_shot_counter = 0; // reset to make this entire code block a one-time thing
			}
		} // end of (this.tc != true) if statement
		
		//console.log(this.cannonballs_shot_counter);
	}

	triangle_shake() {
		let vertex_shift = random(2, -2); // will shift all vertices by the same random value
		if (this.tc != true) {
			if (this.cannonball_move >= 25 && this.cannonball_move <= height/4) { // sometime between two positions of shot-out cannonballs
				this.triangle_a_x += vertex_shift;
				this.triangle_a_y += vertex_shift;
				this.triangle_b_x += vertex_shift;
				this.triangle_b_y += vertex_shift;
				this.triangle_c_x += vertex_shift;
				this.triangle_c_y += vertex_shift;
			}

			if (this.cannonball_move >= height/4 && this.cannonball_move < (height/4 + 4)) { // this would be right after the triangle shakes
				// increase brightness value of shape_fill so that it reaches max brightness
				// when cannonballs_shot_counter reaches 9
				this.shape_fill_hsb[2] += 50/9;
				this.shape_fill_hsb[2] = constrain(this.shape_fill_hsb[2], 50, 100); // constrain so it doesn't go past 100% brightness

				//update
				this.shape_fill = color('hsb('+ str(this.shape_fill_hsb[0]) + ', ' + str(this.shape_fill_hsb[1]) + '%, '+ str(this.shape_fill_hsb[2]) + '%)'); 
			}
		} // end of (this.tc != true) if statement
	}

	/*// circle rises up when user presses mouse 
	// this method works if user inputs tc_ as true when creating object
	rise_up() { 
		if (this.tc) {
			if (mouseIsPressed) {
				this.ellipse_posY += 5;
			}
		}
	}*/

} // end of class