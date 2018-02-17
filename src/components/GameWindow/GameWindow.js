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

var history = [];

var topScore = 0;

var a = history.length

if (a == undefined) {
		a = 0
	}

if (history.length > topScore) {
  topScore = a;
};



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
	if (history.indexOf(image) == -1) {
		history.push(image)
		if (history.length > topScore) {
	  		topScore = history.length;
		};
	}
	else {
		history = []
	}

	var a = history.length

	if (a == undefined) {
		a = 0
	}

	topScore = a;

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
};

const GameWindow = () =>
	<div>
	<script>
		document.getElementById('currentScore').innerHtml += a;
		document.getElementById('topScore').innerHtml += topScore;
	</script>
		<div class = "window">
			<div class = "scoreboard">
					<h2 id = "currentScore">Current Score: </h2>
					<h2 id = "topScore">Top Score: </h2>
			</div>
			<div>
				<img onClick = {tally(random[0])} src = {random[0]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[1])} src = {random[1]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[2])} src = {random[2]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[3])} src = {random[3]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
			</div>
			<div>
				<img onClick = {tally(random[4])} src = {random[4]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[5])} src = {random[5]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[6])} src = {random[6]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[7])} src = {random[7]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
			</div>
			<div>
				<img onClick = {tally(random[8])} src = {random[8]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[9])} src = {random[9]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[10])} src = {random[10]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[11])} src = {random[11]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
			</div>
			<div>
				<img onClick = {tally(random[12])} src = {random[12]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[13])} src = {random[13]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[14])} src = {random[14]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
				<img onClick = {tally(random[15])} src = {random[15]} alt = "Art by Hokusai" width = "150px" height = "150px"/>
			</div>
		</div>
	</div>


export default GameWindow