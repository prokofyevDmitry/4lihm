import { combineReducers } from "redux";
import { globalState, gpsState, mapState, stageDialogReducer, stageMenuReducer, selectedStage, apiCallsStatus, statgesApi, apiErrors, gpsPointsApi, btnLaunchReducer } from './racemap/reducers/globalstate'

const ihmReducer = combineReducers({
  globalState,
  gpsState,
  stageDialogReducer,
  stageMenuReducer,
  selectedStage,
  apiCallsStatus,
  statgesApi,
  gpsPointsApi,
  mapState,
  btnLaunchReducer,
  apiErrors
})

export default ihmReducer;
