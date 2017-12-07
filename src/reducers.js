import { combineReducers } from "redux";
import { globalState, gpsState, stageDialogReducer } from './racemap/reducers/globalstate'

const ihmReducer = combineReducers({
  globalState,
  gpsState,
  stageDialogReducer
})

export default ihmReducer;
