import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {ProductReducer} from "./ProductReducer"

export const appReducer = combineReducers({
    productReducers:ProductReducer,

});
const rootReducer=(state,action) =>{
    if(action.type=="USER_LOG_OUT") {
        storage.removeItem("persist:toot")
        state=undefined;
        window.location.reload(true)
    }
    return appReducer(state,action)
}
export default rootReducer;

