
import { NavLink } from "react-router-dom"
import "./navigation.css";

export function Navbar() {

    return (
        <>
            <nav className="nav bg-radient">
                <div className="nav-logo">
                    <NavLink to="/" className="link"><span className="nav-header l-sp-1 theme-shade-2">Pure<span className="txt-theme txt-bold">Fitness</span></span></NavLink>
                </div>
                <span id="btn-hamburger" className="nav-btn"><i className="fas fa-bars fa-lg"></i></span>
                <div className="txt-box">
                    <input className="txt-input" type="text" placeholder="Search" />
                    <span className="txt-icon bg-theme"><i className="fas fa-search"></i></span>
                </div>
                <ul id="main-list" className="nav-list nav-list-hide">
                    <li className="list-item"> <NavLink to="/" className="link theme-shade-2"><i className="fas fa-lg fa-home"></i></NavLink></li>
                    <li className="list-item  txt-bold"><NavLink to="/login" className="link theme-shade-2"><i className="fas fa-lg fa-user "></i></NavLink>
                    </li>
                    <li className="list-item  txt-bold"><NavLink to="/products" className="link theme-shade-2"><i className="fas fa-lg fa-store "></i></NavLink>
                    </li>
                    <li className="list-item"> <NavLink to="/wishlist" className=" link theme-shade-2"><i
                        className="fas fa-lg fa-heart"></i>
                        <span className="badge-secondary badge-icon txt-bold"></span></NavLink>
                    </li>
                    <li className="list-item  txt-bold"> <NavLink to="/cart" className="link theme-shade-2"><i
                        className="fas fa-lg fa-shopping-cart"></i>
                        <span className="badge-secondary badge-icon txt-bold"></span>
                    </NavLink> </li>
                </ul>
            </nav>
        </>
    )
}