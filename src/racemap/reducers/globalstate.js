export const globalState = (state = {counter: 0,liveLogging:false, gpsPoints:[]}, action) => {
console.log(action.type + "occured");
  switch (action.type) {
        case 'START_LOGGING':
        console.log(action);
      return ({
          liveLogging : !state.liveLogging,
          socket : action.socket,
      })
      case 'STOP_LOGGING':
        return ({
            liveLogging : !state.liveLogging,
            socket : action.socket
        })
    default:
      return state;
  }
}




export const gpsState = (state={gpsPoints:[]},action) => {
  switch(action.type){
    case 'START_LOGGING':
    return ({
        gpsPoints: []
    })
    case 'ADD_GPS':
        return ({
          gpsPoints : state.gpsPoints.concat(action.gpsPoint)
        })
        default:
          return state;0
  }
  }
