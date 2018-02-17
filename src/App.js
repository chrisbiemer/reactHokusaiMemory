import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import GameWindow from "./components/GameWindow";
import Footer from "./components/Footer";



const App = () =>
  <Router>
    <div>
      <Navbar />
      <About />
      <GameWindow />
      <Footer />
    </div>
  </Router>;

export default App;
