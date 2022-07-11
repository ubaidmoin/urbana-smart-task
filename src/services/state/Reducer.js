export const actions = {
  SET_MOVIES: "SET_MOVIES",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    default:
      return state
  }
}
