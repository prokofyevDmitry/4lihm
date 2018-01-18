import React, { Component } from 'react';
import ToolbarExamplesSimple from './toolbar/toolbar';
import CarPhysics from './carphysics/carphysics';
import Racemap from './racemap/components/Racemap'
import Camera from './camera/camera';
import LoarderContainer from './loader/loader';
import { Route, HashRouter } from "react-router-dom";
import SnackbarContainer from './snackbar/Snackbar';
import './App.css';



class App extends Component {
  render() {
    return (

      <HashRouter>
        <div>
          <ToolbarExamplesSimple/>
          <div className="content">
            <LoarderContainer/>
            <Route path="/carphysics"
                   component={ CarPhysics } />
            <Route path="/camera"
                   component={ Camera } />
              <Route path="/racemap"
                   component={ Racemap } />
            <SnackbarContainer />
          </div>
        </div>
      </HashRouter>

      );
  }
}

export default App;
