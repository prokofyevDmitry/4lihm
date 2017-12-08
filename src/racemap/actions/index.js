import openSocket from 'socket.io-client';
import apiPaths from '../../APIPaths'
/**
 *  action to add gps point to map, profiler and info
 *  this action is emmited by the network logger when he recieve a message.
 */
export const addPoint = gpsPoint => {
  return {
    type: 'ADD_GPS',
    gpsPoint: gpsPoint
  }
}

export const BtnLaunchClicked = () => {
  return (dispatch, getState) => {
    console.log(getState().globalState);
    // if logging is live we stop it, start it otherwise
    dispatch((getState().globalState.liveLogging ? stopLiveLogging(getState) : openStageDialog()));
  }
}


/**
 * action that launch the live logging
 * On that action :
 *  the menuStage is locked
 *  the launchButton will start to act as "stop button"
 *  the network logger start socket communication with the nodejs server
 *  The stage name popup is closed with a close event dispatch
 */
export const startLiveLogging = (dispatch, departure, arrival) => {


  // writing new stage to server
  console.log(departure, arrival)

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
    socket: socket,
  }
};




//IU ACTIONS

export const openStageDialog = () => {
  return {
    type: 'OPEN_STAGE_DIALOG'
  }
}
// TODO: remove if not needed in the end
export const closeStageDialog = () => {
  return {
    type: 'CLOSE_STAGE_DIALOG'
  }
}

export const openStageMenu = () => {
  return {
    type: 'OPEN_STAGE_MENU'
  }
}
// TODO: remove if not needed in the end
export const closeStageMenu = () => {
  return {
    type: 'CLOSE_STAGE_MENU'
  }
}




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





/*****************************************************************************************
                                          API ACTIONS
*****************************************************************************************/

/*  Recieve the json from the stage request made by the RaceMap
*/
export const receiveStages = json => {
  return {
    type: 'RECEIVE_STAGES',
    stages: json.data.children.map(child => child.data)
  }
}

export const requestStages = () => {
  return {
    type: 'REQUEST_STAGES'
  }
}

export const fetchStages = () => {
  return (dispatch) => {
    // Make UI aware of the fact that we are fetching stages
    dispatch(requestStages());


    return fetch(apiPaths.stages).then(
      response => response.json()).then(json => dispatch(receiveStages(json)))
  }
}

/* Create new stage from data recieved from the RaceMap */

export const createStage = () => {
  return {
    type: 'CREATE_STAGE'
  }
}

export const createdStage = () => {
  return {
    type: 'CREATED_STAGE'
  }
}

export const errorCreateStage = error => {
  return {
    type: 'ERROR_CREATE_STAGE',
    error: error
  }
}

export const writeSrage = (departure, arrival) => {
  return (dispatch) => {

    dispatch(createdStage());

    return fetch(apiPaths.stages, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        departure: departure,
        arrival: arrival
      })
    }).then(
      response => {
        if (!response.ok) {
          dispatch(errorCreateStage(response.statusText));
          return;
        }
        dispatch(createdStage());
      }
    )
  }
}


/*
{
  selectedStage: 1,
  isFetching: false,
  stages: [
  {
  daperture: st-pet
  arrival: paris,
  ...
  }]
}


*/