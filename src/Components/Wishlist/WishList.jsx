import { useUserContext } from "../../Context/UserDataProvider";
import WishItem from "./WishItem";
import "./wishlist.css";
export function WishList() {
  const { userState, userDispatch } = useUserContext();

  return (
    <>
      <h2 className="title txt-center txt-theme txt-gray">
        My Wishlist ({userState.wishlistItems.length})
      </h2>

      <section className="wishlist-category flex-box">
        {userState.wishlistItems.map((wishItem) => (
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
