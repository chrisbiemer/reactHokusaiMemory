import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Scoreboard from "./components/Scoreboard";
import GameWindow from "./components/GameWindow";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <About />
      
      	<Scoreboard />
      <div class = "window">
      	<GameWindow />
      </div>
      <div class = "window">
        <Footer />
      </div>
    </div>
  </Router>;

export default App;
