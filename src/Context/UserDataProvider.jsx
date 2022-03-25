import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";
import { userReducer } from "../Reducer/userData-reducer";
import { useAuthenticationContext } from "./AuthenticationProvider";

const UserDataContext = createContext();

const initialArgs = {
  wishlistItems: [],
  cartItems: [],
  toastMsg: "",
};

export const UserDataProvider = ({ children }) => {
  const { login } = useAuthenticationContext();
  const [userState, userDispatch] = useReducer(userReducer, initialArgs);
  const header = { headers: { authorization: localStorage.getItem("token") } };

  useEffect(() => {
    if (login === true) {
      (async () => {
        const {
          data: { wishlist },
        } = await axios.get("api/user/wishlist", header);
        userDispatch({ type: "SET_WISHLIST", payload: wishlist });
        const {
          data: { cart },
        } = await axios.get("api/user/cart", header);
        userDispatch({ type: "SET_CART", payload: cart });
      })();
    }
  }, [login]);

  return (
    <UserDataContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserContext = () => useContext(UserDataContext);
