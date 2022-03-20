import { NavLink } from "react-router-dom"
export default function ({ category }) {

    return (
        <NavLink to="/products" className="link">
            <div className="card">
                <img className="card-img" alt={category.categoryName} src={category.img} />
                <p className="heading-4 l-sp-1 theme-shade-2">{category.categoryName}</p>
            </div>
        </NavLink>
    )
}