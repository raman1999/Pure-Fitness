import { useEffect } from "react";
import { useFilterContext } from "../../Context";
import { ProductFilter } from "./ProductFilter";
import { getFilterProducts } from "../../Utils";
import { ProductCard } from "./ProductCard";
import "./products.css";
import { LoadingSpinner } from "../../Utils";
import { UseGetAxios } from "../../Hooks/UseGetAxios";

export function ProductListing() {
  const { filterState, filterDispatch } = useFilterContext();

  const {
    serverData: { products },
    isLoading,
  } = UseGetAxios("api/products");

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
        {!isLoading && <ProductFilter />}

        {!isLoading && (
          <div className="products-category-box">
            <h2 className="title txt-center txt-gray">
              {filterProducts.length > 0 ? "All Products" : "No Results Found"}
            </h2>

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
