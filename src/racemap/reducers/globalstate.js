export const globalState = (state = {
    counter: 0,
    liveLogging: false,
    gpsPoints: []
  } , action) => {
  console.log(action.type + "occured");
  switch (action.type) {
  case 'START_LOGGING':
    console.log(action);
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
    open: false
  }, action) => {
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
    open: false
  }, action) => {
  switch (action.type) {
  case 'OPEN_STAGE_MENU':
    return ({
      open: true
    });
  case 'REQUEST_STAGES':
    return ({
      open: false
    });
  default:
    return state;
  }

}


// STAGE HANDLE 
export const selectedStage = (state = {
    selectedStage: 0
  }, action) => {
  switch (action.type) {
  case 'SELECT_STAGE':
    return action.selectedStage
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
    return {
      isFetching: true
    }

  case 'RECEIVE_STAGES':
  case 'CREATED_STAGE':
  case 'ERROR_CREATE_STAGE':

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
    return {
      stages: [],
      error: action.error
    }

  default:
    return state
  }
}

