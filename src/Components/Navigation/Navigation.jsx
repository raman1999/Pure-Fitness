import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import "./navigation.css";
import {
  useAuthenticationContext,
  useUserContext,
  useFilterContext,
} from "../../Context";

export function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const { filterDispatch } = useFilterContext();
  const {
    userState: { wishlistItems, cartItems },
    userDispatch,
  } = useUserContext();
  const { login, setLogin } = useAuthenticationContext();
  const navigate = useNavigate();
  function logOutHandler() {
    userDispatch({ type: "SET_WISHLIST", payload: [] });
    userDispatch({ type: "SET_CART", payload: [] });
    setLogin(false);
    localStorage.clear();
    userDispatch({ type: "SHOW_TOAST", payload: "Logged Out Successfully" });
    navigate("/");
  }
  function searchHandler(e) {
    if (e.keyCode === 13) {
      filterDispatch({ type: "SEARCH_PRODUCT", payload: searchValue });
      setSearchValue("");
    }
  }

  return (
    <>
      <nav className="nav bg-radient">
        <div className="nav-logo">
          <NavLink to="/" className="link">
            <span className="nav-header l-sp-1 theme-shade-2">
              Pure<span className="txt-theme txt-bold">Fitness</span>
            </span>
          </NavLink>
        </div>
        <div className="txt-box pos-relative">
          <input
            className="txt-input"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={searchHandler}
          />
          <span
            className="txt-icon search-icon bg-theme"
            onClick={() => {
              filterDispatch({ type: "SEARCH_PRODUCT", payload: searchValue });
              setSearchValue("");
            }}
          >
            <i className="fas fa-search"></i>
          </span>
        </div>

        <ul id="main-list" className="nav-list nav-list-hide">
          <li className="list-item">
            <NavLink to="/" className="link theme-shade-2">
              <i className="fas fa-lg fa-home"></i>
            </NavLink>
          </li>

          <li className="list-item  txt-bold">
            <NavLink to="/products" className={"link theme-shade-2"}>
              <i className="fas fa-lg fa-store "></i>
            </NavLink>
          </li>

          <li className="list-item">
            <NavLink
              to={login ? "/wishlist" : "/login"}
              className="link theme-shade-2"
            >
              <i className="fas fa-lg fa-heart"></i>
              {wishlistItems.length > 0 && (
                <span className="badge-secondary badge-icon txt-bold">
                  {wishlistItems.length}
                </span>
              )}
            </NavLink>
          </li>
          <li className="list-item  txt-bold">
            <NavLink
              to={login ? "/cart" : "/login"}
              className="link theme-shade-2"
            >
              <i className="fas fa-lg fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="badge-secondary badge-icon txt-bold">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          </li>
          {login && (
            <li className="list-item  txt-bold">
              <NavLink to="/login" className="link theme-shade-2">
                <i
                  className="fas fa-lg fa-sign-out-alt"
                  onClick={logOutHandler}
                ></i>
              </NavLink>
            </li>
          )}
          {!login && (
            <li className="list-item  txt-bold">
              <NavLink to="/login" className="link theme-shade-2">
                <i className="fas fa-lg fa-user "></i>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
