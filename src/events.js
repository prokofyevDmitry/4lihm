// define events constants and explaine the utility of each event. 



// live logging events
// event triggered by the launchButton 
// DATA impact : none
// UI impact : change the text of the launchButton from "Start" to "Stop"
START_LOGGING

// event triggered by the launchButton
// DATA impact : delete all gpsPoints in the state
// UI impact : 
STOP_LOGGING


// stage preview events
// launched by the selection of an element in stageMenu
// DATA impact : 
// UI impact : 
STOP_PREVIEW

// map event
// truggered by the change in the map: used to ubpdate the coordinates of the border of the map
// DATA impact : 
// UI impact : 
MAP_BOUNDS_CHANGES



// stage api events

// trigered by the launchButton 
// DATA impact : 
// UI impact : 
CREATE_STAGE




// trigered by the good createStage api call
// DATA impact : 
// UI impact : 
CREATED_STAGE




// trigered by the selection of a stage inside the stageMenu
// DATA impact : 
// UI impact : 
SELECT_STAGE




// trigered by the initialisation of stageMenu
// DATA impact : 
// UI impact : 

REQUEST_STAGES


// triggered by the good getStage api call
// DATA impact : 
// UI impact : 
RECEIVE_STAGES

// trigered by the bad createStage api call
// DATA impact : 
// UI impact : 
ERROR_CREATE_STAGE



// triggered by the bad getStage api call
// DATA impact : 
// UI impact : 
ERROR_REQUEST_STAGES

// gps points api events
// DATA impact : 
// UI impact : 
REQUEST_GPS_POINTS


ERROR_REQUEST_GPS_POINTS


RECEIVE_GPS_POINTS
// ui events

// stage dialog
OPEN_STAGE_DIALOG


// stage menu 
OPEN_STAGE_MENU
CLOSE_STAGE_MENU


