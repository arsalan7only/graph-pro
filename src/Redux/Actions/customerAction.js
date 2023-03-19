import axios from "axios";
import {
  ADD_CATEGORY_API,
  ADD_CUSTOMER_API,
  ADD_EDIT_CUSTOMER_API,
  ADD_GALLERY_API,
  ADD_PRODUCT_API,
  CUSTOMER_CHANGESTATUS_API,
  GET_CATEGORYS_API,
  GET_CATEGORY_API,
  GET_CUSTOMER_API,
  GET_EDIT_CUSTOMER_API,
  GET_GALLERY_API,
} from "../../Api/BaseURL";
import Toaster from "../../Components/Toaster";

//!{Customers Actions}//
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
export const addEditCustomer = (id, payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${ADD_EDIT_CUSTOMER_API}/${id}`, payload);
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
export const getEditCustomer = (id) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${GET_EDIT_CUSTOMER_API}/${id}`);
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
      if (res.status == 200) {
        if (payload.status == "2") {
          Toaster(true, "Customer Deleted Successfully");
        } else {
          Toaster(true, "Customer Status Changed Successfully");
        }
      }
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

//!{Galleries Actions}//
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
export const getgallery =
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

//!{Categories Actions}//
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
export const addcategory = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(ADD_CATEGORY_API, payload);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
export const getcategory =
  (rowperpage, page, sortby, order, search) => (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          `${GET_CATEGORYS_API}?rowperpage=${rowperpage}&page=${page}&sortby=${sortby}&order=${order}&search=${
            search ? search : ""
          }`
        );
        dispatch({
          type: "GET_CATEGORY",
          payload: res.data,
        });
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  };

//!{Products Actions}//
export const addproduct = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(ADD_PRODUCT_API, payload);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
