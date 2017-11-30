import React, { Component } from 'react';
import ToolbarExamplesSimple from './toolbar/toolbar';
import CarPhysics from './carphysics/carphysics';
import Racemap from './racemap/components/Racemap'
import Camera from './camera/camera';
import {
    Route,
    HashRouter
} from "react-router-dom";

import './App.css';



class App extends Component {
  render() {
    return (

        <HashRouter >
          <div>
              <ToolbarExamplesSimple/>
          <div className="content">
            <Route path="/carphysics" component={CarPhysics}/>
            <Route path="/camera" component={Camera}/>
            <Route path="/racemap" component={Racemap}/>
          </div>
          </div>
        </HashRouter>

    );
  }
}

export default App;
