import {combineReducers} from "redux";
import {globalState,gpsState} from './racemap/reducers/globalstate'

const ihmReducer = combineReducers({
    globalState,
    gpsState
})

export default ihmReducer;
