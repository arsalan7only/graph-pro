const initialState = {
  product: [],
  customer:[],
  gallary:[],
  parentcategory:[]
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
      
    case "GET_GALLARY":
      return {
        ...state,
        gallary: action.payload,
      };
    case "GET_PARENT_CATEGORY":
      return {
        ...state,
        parentcategory: action.payload,
      };
      
  }
  return state;
};
