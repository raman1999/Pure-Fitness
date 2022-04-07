import { useFilterContext } from "../../Context/";

export function ProductFilter({ showFilter, setShowFilter }) {
  const { filterState, filterDispatch } = useFilterContext();
  const {
    originalProducts,
    priceRange,
    sortByPrice,
    excludeOutOfStock,
    brandFilter,
    categoryFilter,
    fastDelivery,
    ratingFilter,
  } = filterState;
  const distinct = (value, index, self) => self.indexOf(value) === index;

  const categories = originalProducts
    .map((product) => product.categoryName)
    .filter(distinct);

  const brands = originalProducts
    .map((product) => product.brand)
    .filter(distinct);
  return (
    <div
      className={`${showFilter ? "active-filter-container" : ""}`}
      onClick={() => setShowFilter(!showFilter)}
    >
      <aside className="filter-list">
        <div className="flex-row filter-header">
          <h2 className="theme-shade-2">Filters</h2>
          <button
            type="button"
            className="txt-bold btn-clear"
            onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}
          >
            Clear All
          </button>
        </div>

        <div className="sort-by-price flex-column ">
          <h4>Sort By Price</h4>
          <div>
            <input
              type="radio"
              name="sort_by_price"
              id="low-to-high"
              onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
              checked={sortByPrice === "LOW_TO_HIGH"}
            />
            <label htmlFor="low-to-high">Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              name="sort_by_price"
              id="high-to-low"
              onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
              checked={sortByPrice === "HIGH_TO_LOW"}
            />
            <label htmlFor="high-to-low">High to Low</label>
          </div>
        </div>
        <div className="sort-by-price-range flex-column ">
          <div className="price-range-header flex-row">
            <span className="txt-bold">Price Range:</span>
            <span> 0 to {priceRange}</span>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="10000"
              className="range-slider"
              style={{
                background: `linear-gradient(90deg, var(--txtSecondary) ${
                  Number(priceRange) / 100
                }%, var(--bgLight) 0%`,
              }}
              value={priceRange}
              id="slider"
              onChange={(e) =>
                filterDispatch({
                  type: "PRICE_RANGE",
                  payload: e.target.value,
                })
              }
            />
            <div className="flex-row label-container txt-bold">
              <label>0</label>
              <label>10000</label>
            </div>
          </div>
        </div>
        <div className="sort-by-filter flex-column ">
          <h4>Sort By Filter</h4>
          <div>
            <input
              type="checkbox"
              id="exclude-stock"
              onChange={() => filterDispatch({ type: "EXCLUDE_OUT_OF_STOCK" })}
              checked={excludeOutOfStock}
            />
            <label htmlFor="exclude-stock"> Exclude out of stock</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fast-delivery"
              onChange={() => filterDispatch({ type: "FASTEST_DELIVERY" })}
              checked={fastDelivery}
            />
            <label htmlFor="fast-delivery"> Fastest delivery</label>
          </div>
        </div>
        <div className="sort-by-brand flex-column ">
          <h4>Brands</h4>
          {brands.map((brand) => (
            <div key={brand}>
              <input
                type="checkbox"
                id={brand}
                onChange={() =>
                  filterDispatch({ type: "FILTER_BY_BRAND", payload: brand })
                }
                checked={brandFilter.some((val) => val === brand)}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
        <div className="sort-by-category flex-column ">
          <h4>Categories</h4>
          {categories.map((categoryName) => (
            <div key={categoryName}>
              <input
                type="checkbox"
                id={categoryName}
                onChange={() =>
                  filterDispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: categoryName,
                  })
                }
                checked={categoryFilter.some((val) => val === categoryName)}
              />
              <label htmlFor={categoryName}>{categoryName}</label>
            </div>
          ))}
        </div>
        <div className="sort-by-rating flex-column">
          <h4>Ratings</h4>
          <div>
            <input
              type="radio"
              name="ratings"
              id="four-above"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_RATING",
                  payload: "FOUR_AND_ABOVE",
                })
              }
              checked={ratingFilter === "FOUR_AND_ABOVE"}
            />
            <label htmlFor="four-above">4 stars and above</label>
          </div>
          <div>
            <input
              type="radio"
              name="ratings"
              id="three-above"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_RATING",
                  payload: "THREE_AND_ABOVE",
                })
              }
              checked={ratingFilter === "THREE_AND_ABOVE"}
            />
            <label htmlFor="three-above">3 stars and above</label>
          </div>
          <div>
            <input
              type="radio"
              name="ratings"
              id="two-above"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_RATING",
                  payload: "TWO_AND_ABOVE",
                })
              }
              checked={ratingFilter === "TWO_AND_ABOVE"}
            />
            <label htmlFor="two-above">2 stars and above</label>
          </div>
          <div>
            <input
              type="radio"
              name="ratings"
              id="one-above"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_RATING",
                  payload: "ONE_AND_ABOVE",
                })
              }
              checked={ratingFilter === "ONE_AND_ABOVE"}
            />
            <label htmlFor="one-above">1 star and above</label>
          </div>
        </div>
      </aside>
    </div>
  );
}
