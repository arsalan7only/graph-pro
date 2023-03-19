import axios from "axios";
import { LOGIN_API } from "../../Api/baseUrl";
import Toaster from "../../Components/Toaster";

export const userLogin = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(LOGIN_API, payload);
      Toaster(res.data.status,res.data.messege)
      if (res.data.status == true) {
        dispatch({
          type: "USER_LOGGED",
          payload: res.data.token,
        });
      }
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
