import { useUserContext } from "../../Context";
import { updateCart } from "../../Utils";

export function CartItem({ cartItem, userDispatch }) {
  const { img, price, brand, rating, originalPrice, categoryName, qty } =
    cartItem;
  const {
    userState: { wishlistItems, toastMsg },
  } = useUserContext();
  const cardRating = rating >= 3 ? "#26a541" : "#ff6161";
  return (
    <div className="card-horizontal">
      <img className="card-img" alt="card" src={img} />
      <div className="card-content-box flex-column">
        <p className="heading-3 l-sp-1 theme-shade-2 txt-bold">{brand}</p>
        <span className="card-desc">{categoryName}</span>
        <div>
          <span
            className="rating-block txt-white"
            style={{ backgroundColor: cardRating }}
          >
            {rating} <i className="fa fa-star"></i>
          </span>
        </div>
        <p className="card-price txt-bold">
          ₹ {price}
          <span className="txt-small txt-normal l-through">
            {" "}
            ₹ {originalPrice}
          </span>
        </p>
        <div className="flex-box j-center quantity-box">
          <button
            className={`fas fa-solid txt-gray ${
              qty === 1 ? "fa-trash" : "fa-minus"
            }`}
            onClick={() =>
              qty === 1
                ? updateCart("REMOVE_FROM_CART", cartItem, userDispatch)
                : updateCart("DECREMENT_FROM_CART", cartItem, userDispatch)
            }
            disabled={toastMsg}
          ></button>

          <button className="txt-center txt-bold theme-shade-2 ">{qty}</button>

          <button
            className="bg  fas fa-solid fa-plus txt-gray"
            onClick={() =>
              updateCart("INCREMENT_FROM_CART", cartItem, userDispatch)
            }
            disabled={toastMsg}
          ></button>
        </div>
        <button
          type="button"
          className="btn bg-theme txt-white"
          onClick={() =>
            updateCart(
              "MOVE_TO_WISHLIST",
              { cartItem, wishlistItems },
              userDispatch
            )
          }
          disabled={toastMsg}
        >
          {" "}
          <i className="fas fa-heart"></i>&nbsp; Move to Wishlist
        </button>

        <button
          type="button"
          className="btn txt-white btn-goto-cart"
          onClick={() => updateCart("REMOVE_FROM_CART", cartItem, userDispatch)}
          disabled={toastMsg}
        >
          {" "}
          <i className="fas fa-shopping-cart"></i>&nbsp; Remove From Cart
        </button>
      </div>
    </div>
  );
}
