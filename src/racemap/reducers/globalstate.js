let lat = 0,lng = 0;
const globalState = (state = {counter: 0,liveLogging:false, gpsPoints:[]}, action) => {
  switch (action.type) {
    case 'BTN_LAUNCH_CLICKED':
      // decision macking as with what to do with that click
      console.log(state);
      lat++;
      lng++;
      return({
          liveLogging : !state.liveLogging,
          counter :  state.counter++,
          gpsPoints: Array.concat(state.gpsPoints, {lat,lng})
        });

    default:
      return state;
  }
}

export default globalState;
