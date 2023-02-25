import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { ProductReducer } from "./ProductReducer";

const appReducer = combineReducers({
  ProductReducer: ProductReducer,
});

const rootReducer= (state,action)=>{
    if (action.type == "USER_LOG_OUT"){
        storage.removeItem("persist:root")
        state= undefined
        window.location.reload(true)
    }
    return appReducer(state,action)
}

export default rootReducer
