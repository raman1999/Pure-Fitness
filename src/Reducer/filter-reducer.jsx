export function filterReducer(state, { type, payload }) {

  const { originalProducts, sortByPrice, excludeOutOfStock, fastDelivery, brandFilter, categoryFilter, searchValue, priceRange, ratingFilter } = state;

  switch (type) {

    case "HIGH_TO_LOW":
      return { ...state, sortByPrice: "HIGH_TO_LOW" };

    case "LOW_TO_HIGH":
      return { ...state, sortByPrice: "LOW_TO_HIGH" };

    case "EXCLUDE_OUT_OF_STOCK":
      return { ...state, excludeOutOfStock: !state.excludeOutOfStock };

    case "FASTEST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };

    case "FILTER_BY_BRAND":
      return {
        ...state,
        brandFilter: state.brandFilter.some((brand) => brand === payload)
          ? state.brandFilter.filter((brand) => brand !== payload)
          : state.brandFilter.concat(payload),
      };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        categoryFilter: state.categoryFilter.some((category) => category === payload)
          ? state.categoryFilter.filter((category) => category !== payload)
          : state.categoryFilter.concat(payload),
      };
    case "SET_PRODUCTS":
      return { ...state, originalProducts: payload }

    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: payload
      };

    case "FILTER_BY_RATING":
      return { ...state, ratingFilter: payload };

    case "SEARCH_PRODUCT":
      return { ...state, searchValue: payload }

    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortByPrice: null,
        excludeOutOfStock: false,
        fastDelivery: false,
        priceRange: 10000,
        searchValue: "",
        brandFilter: [],
        categoryFilter: [],
        ratingFilter: null
      };

    default:
      return state;
  }
}
