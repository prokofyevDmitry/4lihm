import React from "react";
import Grid from 'material-ui/Grid';
import BtnLaunch from '../containers/BtnLaunch';
import MapContainer from '../containers/MapContainer';
import StageDialogContainer from '../containers/StageDialogContainer';
import StageMenuContainer from '../containers/StageMenuContainer';

class Racemap extends React.Component {
  render() {

    return (

      <Grid container
            spacing={ 24 }
            direction={ 'row' }>
        <StageDialogContainer/>
        <Grid item
              direction={ 'column' }
              xs={ 2 }>
          <Grid item
                xs={ 12 }>
            boutons 1
          </Grid>
          <Grid item
                xs={ 12 }>
            { /* LAUNCH BUTTON */ }
            <BtnLaunch />
          </Grid>
          <Grid item
                xs={ 12 }>
          </Grid>
        </Grid>
        <Grid item
              direction={ 'column' }
              xs={ 10 }>
          <Grid item
                xs={ 12 }>
            <StageMenuContainer/>
          </Grid>
          <Grid item
                xs={ 12 }>
            <div style={ { height: "400px" } }>
              { /* MAP */ }
              <MapContainer/>
            </div>
          </Grid>
        </Grid>
      </Grid>

      );
  }
}
;


export default Racemap;
