const initialState = {
  product: [],
  customer: [],
  gallery: [],
  parentcategory: [],
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
    case "GET_PARENT_CATEGORY":
      return {
        ...state,
        parentcategory: action.payload,
      };
  }
  return state;
};
