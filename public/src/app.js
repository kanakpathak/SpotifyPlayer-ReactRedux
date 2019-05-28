import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './js/components/container/login.jsx';
import Home from "./js/components/container/home.jsx";

const App = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path = '/' component = {Login} />
                <Route exact path = '/home' component = {Home} />
            </Switch>
        </Router>
    );
}

export default App