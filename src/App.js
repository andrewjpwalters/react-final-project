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
      <Home />
      <Log />
      <Write />
    </div>
  );
}

export default App;
