import React from "react";
import "./GameWindow.css";
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import image4 from "./images/4.jpg"
import image5 from "./images/5.jpg"
import image6 from "./images/6.jpg"
import image7 from "./images/7.jpg"
import image8 from "./images/8.jpg"
import image9 from "./images/9.jpg"
import image10 from "./images/10.jpg"
import image11 from "./images/11.jpg"
import image12 from "./images/12.jpg"
import image13 from "./images/13.jpg"
import image14 from "./images/14.jpg"
import image15 from "./images/15.jpg"
import image16 from "./images/16.jpg"

var score = 0;

var topScore = 0;

var images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16]

var random = []

var i = 1

while (i<17) {
  var hit = images[Math.floor(Math.random() * images.length)];
  random.push(hit);
  var index = images.indexOf(hit);
  if (index > -1) {
      images.splice(index, 1)
    };
  i++;
};

function tally(image) {
	var score = 0;

	var topScore = 0;

	var images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16]

	var random = []

	var i = 1

	while (i<17) {
  		var hit = images[Math.floor(Math.random() * images.length)];
  		random.push(hit);
  		var index = images.indexOf(hit);
  		if (index > -1) {
      		images.splice(index, 1)
    	};
  		i++;
	};
	if (this.state.clicked == "no") {
		score++;
		this.setState == "yes"
	}
	else if (this.state.clicked =="yes") {
		score = 0;
	}
	
};

const GameWindow = () =>
		<div class = "window">
			<div id = "choices">
				<div>
					<img onClick = {this.tally} src = {random[0]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[1]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[2]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[3]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
				</div>
				<div>
					<img onClick = {this.tally} src = {random[4]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[5]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[6]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[7]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
				</div>
				<div>
					<img onClick = {this.tally} src = {random[8]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[9]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[10]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[11]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
				</div>
				<div>
					<img onClick = {this.tally} src = {random[12]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[13]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[14]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
					<img onClick = {this.tally} src = {random[15]} alt = "Art by Hokusai" width = "175px" height = "175px"/>
				</div>
			</div>
		</div>


export default GameWindow