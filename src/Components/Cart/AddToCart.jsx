import { useUserContext, useAuthenticationContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../Utils";

export function AddToCart({ product }) {
  const navigate = useNavigate();
  const { login } = useAuthenticationContext();
  const {
    userState: { cartItems, toastMsg },
    userDispatch,
  } = useUserContext();
  const isItemInCart = cartItems.some((item) => item._id === product._id);

  return (
    <>
      {!isItemInCart && (
        <button
          type="button"
          className="btn btn-cart bg-theme txt-white"
          disabled={toastMsg}
          onClick={() =>
            login
              ? updateCart("ADD_TO_CART", product, userDispatch)
              : navigate("/login")
          }
        >
          {" "}
          <i className="fas fa-shopping-cart"></i>&nbsp; Add to Cart
        </button>
      )}
      {isItemInCart && (
        <button
          type="button"
          className="btn btn-goto-cart"
          onClick={() => navigate("/cart")}
        >
          Go to Cart
        </button>
      )}
    </>
  );
}
