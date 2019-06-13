import React, { FunctionComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";

const App: FunctionComponent = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

export default App;
