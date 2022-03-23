import { AddToWishList } from "../Wishlist/AddToWishlist";

import { AddToCart } from "../Cart/AddToCart";

export function ProductCard({ product }) {
  const {
    brand,
    categoryName,
    price,
    rating,
    originalPrice,
    img,
    newArrival,
    stockQuantity,
  } = product;

  return (
    <div className="card">
      <img className="card-img" src={img} alt="product" />
      <p className="heading-3 l-sp-1 theme-shade-2 txt-bold">{brand}</p>
      <span className="card-desc">{categoryName}</span>
      <p className="card-price txt-bold">
        ₹ {price}
        <span className="txt-small txt-bold l-through txt-grey">
          {" "}
          ₹ {originalPrice}
        </span>
      </p>
      <span
        className="rating-block txt-white"
        style={{ backgroundColor: rating >= 3 ? "#26a541" : "#ff6161" }}
      >
        {rating} <i className="fa fa-star"></i>
      </span>
      <AddToCart product={product} />

      {newArrival && (
        <span className="badge badge-primary bg-theme card-badge">New</span>
      )}
      {stockQuantity === 0 && (
        <div className="out-stock-container">
          <h4 className="txt-header-3 txt-overlay txt-gray">
            Out of Stock <i className="far fa-clock"></i>
          </h4>
        </div>
      )}

      <AddToWishList product={product} />
    </div>
  );
}
