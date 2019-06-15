import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import PostDetail from "./components/postDetail";

const App: FunctionComponent = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:post_id" component={PostDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
