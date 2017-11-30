

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
  return {
    type: 'BTN_LAUNCH_CLICKED'
  }
}


/**
 * action that launch the live logging
 * On that action :
 *  the menuStage is locked
 *  the launchButton will start to act as "stop button"
 *  the network logger start socket communication with the nodejs server
 */
export const startLiveLogging = () => {
  return {
    type: 'START_LOGGING'
  }
}

/**
 * action that stop the live logging
 */
export const stopLiveLogging = () => {
  return {
    type: 'STOP_LOGGING'
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
