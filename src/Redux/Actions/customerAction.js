import axios from "axios";
import {
  ADD_CUSTOMER_API,
  ADD_GALLERY_API,
  CUSTOMER_CHANGESTATUS_API,
  GET_CATEGORY_API,
  GET_CUSTOMER_API,
  GET_GALLERY_API,
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

export const getCustomer =
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

export const customerChangeStatus = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(CUSTOMER_CHANGESTATUS_API, payload);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

export const addGallery = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(ADD_GALLERY_API, payload);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

export const getGallery =
  (rowperpage, page, search) => (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          `${GET_GALLERY_API}?rowperpage=${rowperpage}&page=${page}&search=${
            search ? search : ""
          }`
        );
        dispatch({
          type: "GET_GALLERY",
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
