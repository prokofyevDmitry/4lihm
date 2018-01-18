import React from "react";
import Grid from 'material-ui/Grid';
import BtnLaunch from '../containers/BtnLaunch';
import MapContainer from '../containers/MapContainer';
import StageDialogContainer from '../containers/StageDialogContainer';
import StageMenuContainer from '../containers/StageMenuContainer';
import AltitudeChartContainer from './AltitudeChartContainer';
import StageStatsContainer from './StageStatsContainer'

class Racemap extends React.Component {
  render() {

    return (

      <Grid container
            spacing={ 24 }
            direction={ 'column' }>
        <StageDialogContainer/>
        <Grid item
              container
              direction={ 'row' }
              xs={ 12 }>
          <Grid item
                xs={ 6 }>
            { /* LAUNCH BUTTON */ }
            <BtnLaunch />
          </Grid>
          <Grid item
                xs={ 6 }>
            <StageMenuContainer/>
          </Grid>
        </Grid>
        <Grid item
              container
              direction={ 'row' }
              xs={ 12 }>
          <Grid item
                xs={ 12 }>
            <div style={ { height: "400px" } }>
              { /* MAP */ }
              <MapContainer/>
            </div>
          </Grid>
          <Grid item
                xs={ 12 }>
            <AltitudeChartContainer/>
            <StageStatsContainer/>
          </Grid>
        </Grid>
      </Grid>

      );
  }
}


export default Racemap;
