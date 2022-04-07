import { useUserContext } from "../../Context";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import "./cart.css";
import { CartItem } from "./CartItem";
import { PriceDetail } from "./PriceDetail";
export function Cart() {
  const {
    userState: { cartItems },
    userDispatch,
  } = useUserContext();
  useDocumentTitle("Cart | PureFitness");
  return (
    <>
      <h2 className="title txt-center txt-theme txt-gray">Cart Page</h2>

      <section className="cart-category flex-row">
        <div className="cart-items flex-row">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem._id}
              cartItem={cartItem}
              userDispatch={userDispatch}
            />
          ))}
        </div>
        {cartItems.length > 0 && <PriceDetail />}
      </section>
    </>
  );
}
