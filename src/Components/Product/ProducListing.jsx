import { useEffect, useState } from "react";
import { useFilterContext } from "../../Context";
import { ProductFilter } from "./ProductFilter";
import { getFilterProducts } from "../../Utils";
import { ProductCard } from "./ProductCard";
import "./products.css";
import { LoadingSpinner } from "../../Utils";
import { UseGetAxios } from "../../Hooks/UseGetAxios";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

export function ProductListing() {
  const { filterState, filterDispatch } = useFilterContext();
  const [showFilter, setShowFilter] = useState(false);
  const {
    serverData: { products },
    isLoading,
  } = UseGetAxios("api/products");
  useDocumentTitle("Products | PureFitness");
  useEffect(() => {
    filterDispatch({ type: "SET_PRODUCTS", payload: products });
  }, [products]);

  const filterProducts = !isLoading
    ? getFilterProducts(filterState, filterState.originalProducts)
    : [];

  return (
    <>
      {isLoading && (
        <div className="loader">
          <LoadingSpinner />
        </div>
      )}
      <div className="grid-container">
        {!isLoading && (
          <ProductFilter
            showFilter={showFilter}
            setShowFilter={setShowFilter}
          />
        )}

        {!isLoading && (
          <div className="products-category-box">
            <div className="product-list-header txt-gray">
              <button type="button" className="btn">
                <i
                  className="fas fa-filter fa-lg filter-btn "
                  onClick={() => setShowFilter(!showFilter)}
                />
              </button>
              {filterProducts.length > 0
                ? `Showing ${filterProducts.length} out of ${filterState.originalProducts.length} products`
                : "No Results Found"}
            </div>

            <section className="products-list flex-box">
              {filterProducts?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </section>
          </div>
        )}
      </div>
    </>
  );
}
