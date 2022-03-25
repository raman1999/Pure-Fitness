import axios from "axios";

export async function updateCart(type, payload, dispatch) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };
  dispatch({ type: "SHOW_TOAST", payload: "Updating Cart..." });

  try {
    switch (type) {
      case "ADD_TO_CART":
        var { data } = await axios.post(
          `api/user/cart`,
          { product: payload },
          postHeader
        );
        dispatch({
          type: "UPDATE_CART",
          payload: { cart: data.cart, toastMsg: "Item added  successfully " },
        });
        break;

      case "REMOVE_FROM_CART":
        var { data } = await axios.delete(
          `api/user/cart/${payload._id}`,
          postHeader
        );
        dispatch({
          type: "UPDATE_CART",
          payload: { cart: data.cart, toastMsg: "Item Removed Successsfully" },
        });
        break;

      case "MOVE_TO_WISHLIST":
        const { wishlistItems, cartItem } = payload;
        const isItemInWishlist = wishlistItems.some(
          (item) => item._id === cartItem._id
        );
        if (!isItemInWishlist) {
          var { data } = await axios.post(
            `api/user/wishlist`,
            { product: cartItem },
            postHeader
          );
          dispatch({ type: "SET_WISHLIST", payload: data.wishlist });
        }
        var { data } = await axios.delete(
          `api/user/cart/${cartItem._id}`,
          postHeader
        );

        dispatch({
          type: "UPDATE_CART",
          payload: { cart: data.cart, toastMsg: "Item Moved Successfully" },
        });
        break;

      case "INCREMENT_FROM_CART":
      case "DECREMENT_FROM_CART":
        var { data } = await axios.post(
          `api/user/cart/${payload._id}`,
          {
            action: {
              type: type === "INCREMENT_FROM_CART" ? "increment" : "decrement",
            },
          },
          postHeader
        );
        dispatch({
          type: "UPDATE_CART",
          payload: { cart: data.cart, toastMsg: "Cart updated Successfully" },
        });
        break;
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to update cart..." });
  }
}
