import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./css/main.css";
import Cuadro from "./resources/components/cuadro/Cuadro";
import Game from "./pages/game/Game";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
