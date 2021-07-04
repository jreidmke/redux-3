const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }] 
      }

    case "REMOVE":
      return {
        ...state,
        cart: [
          ...state.cart.slice(
            0, state.cart.findIndex(i => i.id === action.payload.uuid)), 
          ...state.cart.slice(
              state.cart.findIndex(i => i.id === action.payload.uuid) + 1)
        ]
      };

    default:
      return state;
  }
}

export default rootReducer;