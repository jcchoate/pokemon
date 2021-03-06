import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import map1 from './map/map1';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/maps' component={map1}/>
            <Route path='/register' component={Register}/>
            <Route path='/signin' component={Signin}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
