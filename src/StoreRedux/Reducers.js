import { combineReducers } from "redux";
import userReducer from "./UserSlice";
import adminReducer from './currentAdminSlice';
import venueReducer from './venueSlice';
import otheradminReducer from './adminSlice';


const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  venue: venueReducer,
  otheradmin: otheradminReducer,

});

export default rootReducer;