const initialState = {
  product: [],
  customer:[]
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
  }
  return state;
};
