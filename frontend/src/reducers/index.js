import {combineReducers} from "redux";
import employees from './employees';
import errors from "./errors";
import messages from "./messages"

export default combineReducers({
    employees,
    errors,
    messages
});