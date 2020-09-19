import {combineReducers} from "redux";

import sample from "./sample";
import auth  from  "./auth";

export default combineReducers({
    sample,
    auth
});

