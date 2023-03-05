import axios from "axios";
import { ADD_CUSTOMER_API, GET_CUSTOMER_API } from "../../Api/BaseURL";

export const addCustomer = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(ADD_CUSTOMER_API, payload);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
export const getCustomer =
  (rowperpage, page, sortby, order, search) => (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          `${GET_CUSTOMER_API}?rowperpage=${rowperpage}&page=${page}&sortby=${sortby}&order=${order}$search=${search}`
        );
        dispatch({
          type: "GET_CUSTOMER",
          payload: res.data,
        });
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  };
