import axios from "axios";

export async function updateWishlist(type, payload, dispatch) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };

  dispatch({ type: "SHOW_TOAST", payload: "Updating Wishlist..." });
  try {
    switch (type) {
      case "ADD_TO_WISHLIST":
        var { data } = await axios.post(
          `api/user/wishlist`,
          { product: payload },
          postHeader
        );
        dispatch({
          type: "UPDATE_WISHLIST",
          payload: {
            wishlist: data.wishlist,
            toastMsg: "Item added to wishlist",
          },
        });
        break;

      case "REMOVE_FROM_WISHLIST":
        var { data } = await axios.delete(
          `api/user/wishlist/${payload._id}`,
          postHeader
        );
        dispatch({
          type: "UPDATE_WISHLIST",
          payload: {
            wishlist: data.wishlist,
            toastMsg: "Item removed from wishlist",
          },
        });
        break;
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to update wishlist..." });
  }
}
