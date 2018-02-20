import React from "react";
import "./Scoreboard.css";

const Scoreboard = props =>
	<div class = "scoreboard">
		<h2 id = "currentScore">s c o r e: {props.score}</h2>
		<h2 id = "topScore">b e s t: {props.topScore}</h2>
	</div>

export default Scoreboard