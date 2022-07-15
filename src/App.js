import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar.js'
import Home from './Home'
import Blog from './Blog'
import Write from './Write'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
