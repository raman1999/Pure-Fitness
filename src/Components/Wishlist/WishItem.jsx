import { AddToCart } from "../Cart/AddToCart";
import { updateWishlist } from "../../Utils";
export default function WishItem({ wishItem, userDispatch }) {
  const {
    img,
    price,
    brand,
    rating,
    originalPrice,
    categoryName,
    stockQuantity,
  } = wishItem;

  return (
    <div className="card">
      <img className="card-img" alt="card" src={img} />
      <p className="heading-3 l-sp-1 theme-shade-2 txt-bold">{brand}</p>
      <span className="card-desc">{categoryName}</span>
      <p className="card-price txt-bold">
        ₹ {price}{" "}
        <span className="txt-small txt-normal l-through">
          ₹ {originalPrice}
        </span>
      </p>
      <div>
        <span
          className="rating-block txt-white"
          style={{ backgroundColor: rating >= 3 ? "#26a541" : "#ff6161" }}
        >
          {rating} <i className="fa fa-star"></i>
        </span>
      </div>
      <AddToCart product={wishItem} />
      {stockQuantity === 0 && (
        <div className="out-stock-container">
          <h4 className="txt-header-3 txt-overlay txt-gray">
            Out of Stock <i className="far fa-clock"></i>
          </h4>
        </div>
      )}
      <button
        className="btn-dismiss bg-theme txt-white"
        onClick={() =>
          updateWishlist("REMOVE_FROM_WISHLIST", wishItem, userDispatch)
        }
      >
        x{" "}
      </button>
    </div>
  );
}
