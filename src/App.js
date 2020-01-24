import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Batflix from "./components/Batflix";
import Bestflix from "./components/Bestflix";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/batflix" component={Batflix} />
      <Route exact path="/bestflix" component={Bestflix} />
    </Router>
  );
}

export default App;
