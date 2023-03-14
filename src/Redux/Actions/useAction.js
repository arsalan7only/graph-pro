// import axios from "axios";
// import {
//   ADD_CUSTOMER_API,
//   GET_CUSTOMER_API,
//   LOGIN_API,
// } from "../../Api/baseUrl";

// export const userLogin = (payload) => (dispatch, getState) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = await axios.post(LOGIN_API, payload);
//       dispatch({
//         type: "USER_LOGGED",
//         payload: res.data.token,
//       });
//       resolve(res);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// export const getCustomer = (payload) => (dispatch, getState) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = await axios.get(GET_CUSTOMER_API);
//       resolve(res);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// export const addCustomer = (payload) => (dispatch, getState) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = await axios.post(ADD_CUSTOMER_API, payload);
//       resolve(res);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
