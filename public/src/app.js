import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./js/components/container/login.jsx";
import Home from "./js/components/container/home.jsx";
import Album from "./js/components/container/album.jsx";
import Artist from "./js/components/container/artist.jsx";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/artist" component={Artist} />
        <Route exact path="/album/:id" component={Album} />
        {/* <Route exact path="/album/:accessToken/:id" component={Album} /> */}
      </Switch>
    </Router>
  );
};

export default App;
