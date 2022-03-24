import { useNavigate } from "react-router-dom";
import { useUserContext, useAuthenticationContext } from "../../Context";
import { updateWishlist } from "../../Utils";

export function AddToWishList({ product }) {
  const {
    userDispatch,
    userState: { wishlistItems, toastMsg },
  } = useUserContext();
  const { login } = useAuthenticationContext();
  const navigate = useNavigate();

  const isItemInWishlist = wishlistItems.some(
    (item) => item._id === product._id
  );

  return (
    <>
      <i
        className={
          isItemInWishlist
            ? "fas fa-heart fa-lg btn-wishlist"
            : "far fa-heart fa-lg btn-wishlist"
        }
        onClick={() =>
          login
            ? updateWishlist(
                !isItemInWishlist ? "ADD_TO_WISHLIST" : "REMOVE_FROM_WISHLIST",
                product,
                userDispatch
              )
            : navigate("/login")
        }
        style={{ pointerEvents: toastMsg ? "none" : "auto" }}
      ></i>
    </>
  );
}
