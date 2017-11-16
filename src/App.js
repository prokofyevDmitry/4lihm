import React, { Component } from 'react';
import ToolbarExamplesSimple from './toolbar/toolbar';
import CarPhysics from './carphysics/carphysics';
import Camera from './camera/camera';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Route,
    HashRouter
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <HashRouter>
        <MuiThemeProvider>
          <div>
        <ToolbarExamplesSimple />
          <div className="content">
            <Route path="/carphysics" component={CarPhysics}/>
            <Route path="/camera" component={Camera}/>
          </div>
          </div>
      </MuiThemeProvider>
        </HashRouter>
      // {/*<div className="App">*/}
      //     {/**/}
      //   {/*<header className="App-header">*/}
      //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
      //     {/*<h1 className="App-title">Welcome to React</h1>*/}
      //   {/*</header>*/}
      //   {/*<p className="App-intro">*/}
      //     {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
      //   {/*</p>*/}
      // {/*</div>*/}
    );
  }
}

export default App;
