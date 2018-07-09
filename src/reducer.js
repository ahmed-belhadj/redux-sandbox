const initialState = {
  friends: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
  userLoggedIn: false
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_TOGGLE":
      return Object.assign({}, state, { userLoggedIn: !state.userLoggedIn });
    default:
      return state;
  }
};

export default friendsReducer;
