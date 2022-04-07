import { useUserContext } from "../../Context/UserDataProvider";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import WishItem from "./WishItem";
import "./wishlist.css";
export function WishList() {
  const {
    userState: { wishlistItems },
    userDispatch,
  } = useUserContext();
  useDocumentTitle("Wishlist | PureFitness");
  return (
    <>
      <h2 className="title txt-center txt-theme txt-gray">
        My Wishlist ({wishlistItems.length})
      </h2>
      {wishlistItems.length == 0 && (
        <div className="empty-products txt-bold txt-center">
          You currently have not added any item to wishlist, Please add..
        </div>
      )}
      <section className="wishlist-category flex-box">
        {wishlistItems.map((wishItem) => (
          <WishItem
            key={wishItem._id}
            wishItem={wishItem}
            userDispatch={userDispatch}
          />
        ))}
      </section>
    </>
  );
}
