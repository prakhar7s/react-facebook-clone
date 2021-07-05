export const initialState = {
  user: JSON.parse(localStorage.getItem("fb-clone-user")),
};

console.log(JSON.parse(localStorage.getItem("fb-clone-user")));

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
