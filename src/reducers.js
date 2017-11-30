import {combineReducers} from "redux";
import globalState from './racemap/reducers/globalstate'

const ihmReducer = combineReducers({
    globalState
})

export default ihmReducer;
