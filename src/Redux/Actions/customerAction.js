import axios from "axios";
import {
  ADD_CUSTOMER_API,
  ADD_GALLARY_API,
  CUSTOMER_CHANGESTATUS_API,
  GET_CATEGORY_API,
  GET_CUSTOMER_API,
  GET_GALLARY_API,
} from "../../Api/baseUrl";

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

export const getcustomer =
  (rowperpage, page, sortby, order, search) => (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          `${GET_CUSTOMER_API}?rowperpage=${rowperpage}&page=${page}&sortby=${sortby}&order=${order}&search=${
            search ? search : ""
          }`
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

export const changeChangeStatus = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(CUSTOMER_CHANGESTATUS_API, payload);

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

export const addGallary = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(ADD_GALLARY_API, payload);

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

export const getGallary =
  (rowperpage, page, search) => (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          `${GET_GALLARY_API}?rowperpage=${rowperpage}&page=${page}&search=${
            search ? search : ""
          }`
        );
        dispatch({
          type: "GET_GALLARY",
          payload: res.data,
        });
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  };

export const getparentcategory = () => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(GET_CATEGORY_API);

      dispatch({
        type: "GET_PARENT_CATEGORY",
        payload: res.data,
      });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
