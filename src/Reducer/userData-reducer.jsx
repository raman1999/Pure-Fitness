export function userReducer(state, { type, payload }) {
  switch (type) {
    case "SET_CART":
      return { ...state, cartItems: payload };
    case "SET_WISHLIST":
      return { ...state, wishlistItems: payload };

    case "UPDATE_CART":
      console.log(payload.cart);

      return { ...state, toastMsg: payload.toastMsg, cartItems: payload.cart };
    case "UPDATE_WISHLIST":
      return {
        ...state,
        toastMsg: payload.toastMsg,
        wishlistItems: payload.wishlist,
      };

    case "SHOW_TOAST":
      return { ...state, toastMsg: payload };

    default:
      return state;
  }
}
