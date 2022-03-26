import { Link } from "react-router-dom";
import { useFilterContext } from "../../Context";
export default function ({ category }) {
  const { filterDispatch } = useFilterContext();
  return (
    <Link to="/products" className="link">
      <div
        className="card"
        onClick={() =>
          filterDispatch({
            type: "FILTER_BY_CATEGORY",
            payload: category.categoryName,
          })
        }
      >
        <img
          className="card-img"
          alt={category.categoryName}
          src={category.img}
        />
        <p className="heading-4 l-sp-1 theme-shade-2">
          {category.categoryName}
        </p>
      </div>
    </Link>
  );
}
