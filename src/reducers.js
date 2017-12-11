import { combineReducers } from "redux";
import { globalState, gpsState, mapState, stageDialogReducer, stageMenuReducer, selectedStage, apiCallsStatus, statgesApi, gpsPointsApi } from './racemap/reducers/globalstate'

const ihmReducer = combineReducers({
  globalState,
  gpsState,
  stageDialogReducer,
  stageMenuReducer,
  selectedStage,
  apiCallsStatus,
  statgesApi,
  gpsPointsApi,
  mapState
})

export default ihmReducer;
