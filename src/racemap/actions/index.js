import openSocket from 'socket.io-client';
import apiPaths from '../../APIPaths'

// action that dispatch the given function 
export const retryRequest = (func) => {
  return (dispatch, getState) => {


    switch (getState().apiErrors.lastCalledFunction) {
    case 'REQUEST_GPS_POINTS':
      dispatch(fetchGpsPoints());
      break;
    case 'REQUEST_STAGES':
      dispatch(fetchStages())
      break;

    default:
      return;
    }
  }
}



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


export const mapBoundsChanged = (bounds) => {

  return {
    type: 'MAP_BOUNDS_CHANGES',
    ne: bounds.ne,
    sw: bounds.sw
  }
}


export const selectedStage = (stageId) => {

  return {
    type: 'SELECT_STAGE',
    selectedStage: stageId
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

export const openStageDialog = event => {
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
    stages: json
  }
}

export const requestStages = () => {
  return {
    type: 'REQUEST_STAGES'
  }
}

export const errorRequestStages = error => {
  return {
    type: 'ERROR_REQUEST_STAGES',
    error: error
  }
}

export const fetchStages = () => {
  return (dispatch) => {
    // Make UI aware of the fact that we are fetching stages
    dispatch(requestStages());
    return fetch(apiPaths.stages, {
      mode: 'cors'
    }).then(
      response => {
        if (!response.ok) {
          dispatch(errorRequestStages(response.statusText));
          return;
        }
        response.json().then(json => dispatch(receiveStages(json)))
      })
      .catch(error => {
        dispatch(errorRequestStages(error))
      })

  }
}


export const receiveGpsPoints = json => {

  // we will create elements lat lng gps poitns


  const gpsPointsPures = json.map(gps => ({
    lat: gps.lattitude,
    lng: gps.longitude
  }));




  return {
    type: 'RECEIVE_GPS_POINTS',
    gpsPoints: json,
    gpsPointsPures: gpsPointsPures,
  }
}

export const requestGpsPoints = () => {
  return {
    type: 'REQUEST_GPS_POINTS'
  }
}

export const errorRequestGpsPoints = error => {
  return {
    type: 'ERROR_REQUEST_GPS_POINTS',
    error: error
  }
}




export const fetchGpsPoints = () => {
  return (dispatch, getState) => {

    // verification des informations disponibles pour effectuer la request
    if (getState().selectedStage > -1) {
      dispatch(requestGpsPoints());

      // data construction : 
      const bounds = getState().mapState;

      const req = "?stageId=" + getState().statgesApi.stages[getState().selectedStage].id + "&neLat=" + bounds.ne.lat + "&neLng=" + bounds.ne.lng + "&swLat=" + bounds.sw.lat + "&swLng=" + bounds.sw.lng

      return fetch(apiPaths.gpsPoints + req, {
        mode: 'cors',
      }).then(
        response => {
          if (!response.ok) {
            dispatch(errorRequestGpsPoints(response.statusText));
            return;
          }
          response.json().then(json => dispatch(receiveGpsPoints(json)))
        })
        .catch(error => {
          dispatch(errorRequestGpsPoints(error))
        })
    }
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
      mode: 'cors',
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