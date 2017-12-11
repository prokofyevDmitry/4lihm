export const globalState = (state = {
    counter: 0,
    liveLogging: false,
    gpsPoints: []
  } , action) => {
  console.log(action.type + "occured");
  switch (action.type) {
  case 'START_LOGGING':
    return ({
      liveLogging: !state.liveLogging,
      socket: action.socket,
    })
  case 'STOP_LOGGING':
    return ({
      liveLogging: !state.liveLogging,
      socket: action.socket
    })
  default:
    return state;
  }
}


// map state

export const mapState = (state = {
    ne: {},
    sw: {}
  } , action) => {


  switch (action.type) {

  case 'MAP_BOUNDS_CHANGES':
    console.log(action);
    return {
      ne: action.ne,
      sw: action.sw
    }
  default:
    return state

  }
}



export const gpsState = (state = {
    gpsPoints: []
  }, action) => {
  switch (action.type) {
  case 'START_LOGGING':
    return ({
      gpsPoints: []
    })
  case 'ADD_GPS':
    return ({
      gpsPoints: state.gpsPoints.concat(action.gpsPoint)
    })
  default:
    return state;
  }
}


export const stageDialogReducer = (state = {
    open: false,
    anchorEl: null
  } , action) => {
  switch (action.type) {
  case 'OPEN_STAGE_DIALOG':
    return ({
      open: true

    });
  case 'START_LOGGING':
    return ({
      open: false
    });
  default:
    return state;
  }

}

export const stageMenuReducer = (state = {
    open: false,
    anchorEl: null
  } , action) => {
  switch (action.type) {
  case 'OPEN_STAGE_MENU':
    return ({
      open: true,
      anchorEl: action.anchorEl
    });
  case 'REQUEST_GPS_POINTS':
    return ({
      open: false,
      anchorEl: null
    });
  default:
    return state;
  }

}


// STAGE HANDLE 
export const selectedStage = (state = -1
  , action) => {
  switch (action.type) {
  case 'SELECT_STAGE':
    return action.selectedStage;
  case 'STOP_PREVIEW':
    return -1;
  default:
    return state
  }
}





export const apiCallsStatus = (state = {
    isFetching: false
  }, action) => {

  switch (action.type) {
  case 'REQUEST_STAGES':
  case 'CREATE_STAGE':
  case 'REQUEST_GPS_POINTS':
    return {
      isFetching: true
    }

  case 'RECEIVE_STAGES':
  case 'CREATED_STAGE':
  case 'ERROR_CREATE_STAGE':
  case 'ERROR_REQUEST_STAGES':
  case 'ERROR_REQUEST_GPS_POINTS':
  case 'RECEIVE_GPS_POINTS':
    return {
      isFetching: false
    }
  default:
    return state
  }

}

export const statgesApi = (state = {
    stages: [],
    error: ""
  } , action) => {

  switch (action.type) {
  case 'RECEIVE_STAGES':
    return {
      stages: action.stages,
      error: ""
    }

  // error handling
  case 'ERROR_CREATE_STAGE':
  case 'ERROR_REQUEST_STAGES':
    console.log(action.error);
    return {
      stages: [],
      error: action.error
    }
  default:
    return state
  }
}

export const gpsPointsApi = (state = {
    gpsPoints: [],
    gpsPointsPures: [],
    error: ""
  } , action) => {

  switch (action.type) {
  case 'RECEIVE_GPS_POINTS':
    return {
      gpsPoints: action.gpsPoints,
      gpsPointsPures: action.gpsPointsPures,
      error: ""
    }

  // error handling
  case 'ERROR_REQUEST_GPS_POINTS':
    console.log(action.error);
    return {
      gpsPoints: [],
      gpsPointsPures: [],
      error: action.error
    }
  default:
    return state
  }
}
