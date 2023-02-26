import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { ProductReducer } from "./ProductReducer";
import userReducer from "./UserReducer";

const appReducer = combineReducers({
  ProductReducer: ProductReducer,
  userReducer: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type == "USER_LOG_OUT") {
    storage.removeItem("persist:root");
    state = undefined;
    window.location.reload(true);
  }
  return appReducer(state, action);
};

export default rootReducer;
