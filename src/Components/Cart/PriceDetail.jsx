import { useUserContext } from "../../Context";

export function PriceDetail() {
  const {
    userState: { cartItems },
  } = useUserContext();
  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + Number(curr.originalPrice) * curr.qty,
    0
  );
  const discountPrice = cartItems.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  );
  const discount = totalPrice - discountPrice;

  return (
    <div className="cart-price">
      <h4 className="padding-box theme-shade-2 bd-bottom">
        PRICE DETAILS: ({cartItems.length} Item)
      </h4>
      <div className="flex-between">
        <span className="txt-bold">Total MRP</span>
        <span className="">&#x20b9;{totalPrice}</span>
      </div>
      <div className="flex-between">
        <span className="txt-bold">Discount on MRP</span>
        <span className="discount-price">-&#x20b9;{discount}</span>
      </div>
      <div className="flex-between">
        <span className="txt-bold">Delivery charges</span>
        <span>&#x20b9;50</span>
      </div>
      <div className="flex-between bd-bottom">
        <span className="txt-bold">Taxes</span>
        <span>&#x20b9;50</span>
      </div>

      <div className="flex-between txt-bold">
        <span className="txt-bold">Net Amount</span>
        <span className="theme-shade-2">&#x20b9;{discountPrice + 100}</span>
      </div>
      <button type="button" className="btn btn-order txt-white">
        {" "}
        Place Order
      </button>
    </div>
  );
}
