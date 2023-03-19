import axios from "axios";
import {
  ADD_CATEGORY_API,
  ADD_CUSTOMER_API,
  ADD_EDIT_CUSTOMER__API,
  ADD_GALLARY_API,
  ADD_PRODUCT_API,
  CUSTOMER_CHANGESTATUS_API,
  GET_CATEGORY_API,
  GET_CUSTOMER_API,
  GET_EDIT_CUSTOMER__API,
  GET_GALLARY_API,
} from "../../Api/baseUrl";
import Toaster from "../../Components/Toaster";

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
export const addEditCustomer = (id,payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${ADD_EDIT_CUSTOMER__API}/${id}`, payload);

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
      if(res.status==200){
        if(payload.status == "2")
        Toaster(true,"Customer deleted successfully")
      }else{
        Toaster(true,"Customer change successfully")
      }
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};


export const getEditCustomer =(id) => (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${ GET_EDIT_CUSTOMER__API}/${id}`);
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


export const addProduct = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(ADD_PRODUCT_API, payload);

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

export const addCategories = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(ADD_CATEGORY_API, payload);

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};