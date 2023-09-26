const initialState = {
  token: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED":
      return {
        ...state,
        token: action.payload,
      };
      break;
  }
  return state;
};
export default UserReducer;
