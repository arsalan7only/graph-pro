const initialState = {
  product: [],
  customer:[],
  gallery:[],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "GET_CUSTOMER":
      return {
        ...state,
        customer: action.payload,
      };
    case "GET_GALLERY":
      return {
        ...state,
        gallery: action.payload,
      };
  }
  return state;
};
