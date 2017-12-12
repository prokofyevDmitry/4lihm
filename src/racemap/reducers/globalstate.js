


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
/**UI reducers**/
/*
The button is desactivated 
*/
export const btnLaunchReducer = (state = {
    disabled: false
  }, action) => {
  switch (action.type) {
  case 'ERROR_REQUEST_STAGES':
    return ({
      disabled: false
    })
  case 'OPEN_STAGE_DIALOG':
    return ({
      disabled: true
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
  case 'CLOSE_STAGE_MENU':
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
    stages: []
  }, action) => {

  switch (action.type) {
  case 'RECEIVE_STAGES':
    return {
      stages: action.stages
    }

  // error handling
  case 'ERROR_CREATE_STAGE':
  case 'ERROR_REQUEST_STAGES':
    console.log(action.error);
    return {
      stages: []
    }
  default:
    return state
  }
}

export const gpsPointsApi = (state = {
    gpsPoints: [],
    gpsPointsPures: []
  } , action) => {

  switch (action.type) {
  case 'RECEIVE_GPS_POINTS':
    return {
      gpsPoints: action.gpsPoints,
      gpsPointsPures: action.gpsPointsPures
    }

  // error handling
  case 'ERROR_REQUEST_GPS_POINTS':
    console.log(action.error);
    return {
      gpsPoints: [],
      gpsPointsPures: []
    }
  default:
    return state
  }
}


export const apiErrors = (state = {
    error: "",
    lastCalledFunction: () => {
    },
    active: false
  } , action) => {

  switch (action.type) {
  // calls cancelling all errors
  case 'RECEIVE_GPS_POINTS':
  case 'REQUEST_STAGES':
  case 'RECEIVE_STAGES':
  case 'CREATE_STAGE':
    return ({
      active: false,
      error: "",
      lastCalledFunction: ""
    })

  case 'ERROR_REQUEST_GPS_POINTS':
    return ({
      active: true,
      error: action.error,
      lastCalledFunction: 'REQUEST_GPS_POINTS'
    })

  // case 'ERROR_CREATE_STAGE':
    //   return ({
    //     active: true,
    //     error: action.error,
    //     lastCalledFunction: 'CREATE_STAGE'
    //   })

  case 'ERROR_REQUEST_STAGES':
    return ({
      active: true,
      error: action.error,
      lastCalledFunction: 'REQUEST_STAGES'
    })



  default:
    return state;

  }
}