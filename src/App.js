import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar.js'
import Home from './Home'
import Log from './Log'
import Write from './Write'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/log">
          <Log />
        </Route>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
