import openSocket from 'socket.io-client';

/**
 *  action to add gps point to map, profiler and info
 *  this action is emmited by the network logger when he recieve a message.
 */
export const addPoint = gpsPoint => {
  return {
    type: 'ADD_GPS',
    gpsPoint:gpsPoint
  }
}

export const BtnLaunchClicked = () => {
    return (dispatch, getState) => {
        console.log(getState().globalState);
        // if logging is live we stop it, start it otherwise
        dispatch((getState().globalState.liveLogging ?  stopLiveLogging(getState) :startLiveLogging(dispatch) ));
    }
}


/**
 * action that launch the live logging
 * On that action :
 *  the menuStage is locked
 *  the launchButton will start to act as "stop button"
 *  the network logger start socket communication with the nodejs server
 */
export const startLiveLogging = (dispatch) => {
    // we connect to the socket
    const socket = openSocket('http://localhost:8000');
    // socket configuration
    socket.on('gpsPoint', data => {
          // the data are the gpsPoints
          // {lat,lng,time}
          console.log(data);
          dispatch(addPoint(data));
        });
    return {
      type: 'START_LOGGING',
      socket: socket
    }
};

/**
 * action that stop the live logging
 */
export const stopLiveLogging = getState => {
  // stopping the socket connection
  getState().globalState.socket.disconnect();
  return {
    type: 'STOP_LOGGING',
    socket: null
  }
}


/**
 * action that start the preview of older stage.
 */
 export const startHistoricalPriview = stageId => {
   return {
     type: 'START_HISTORICAL_PRIVIEW',
     stageId : stageId
   }
 }

 /**
  * action that stop the preview of older stage.
  */
  export const stopHistoricalPriview = () => {
    return {
      type: 'STOP_HISTORICAL_PRIVIEW'
    }
  }
