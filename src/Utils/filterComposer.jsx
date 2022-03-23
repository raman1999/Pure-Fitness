export function filterComposer(state, originalData, ...functions) {
  return functions.reduce((acc, curr) => {
    return curr(state, acc);
  }, originalData);
}

export function SortByPrice(state, data) {
  if (state.sortByPrice !== null) {
    const sortData = [...data].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
    return state.sortByPrice === "LOW_TO_HIGH" ? sortData : sortData.reverse();
  }
  return data;
}

export function FilterByRange(state, data) {
  return data.filter(
    (product) => Number(product.price) <= Number(state.priceRange)
  );
}

export function FilterByExcludeOutOfStock(state, data) {
  return state.excludeOutOfStock
    ? data.filter((item) => item.stockQuantity > 0)
    : data;
}

export function FilterByFastDelivery(state, data) {
  if (state.fastDelivery === true)
    return data.filter((item) => item.fastDelivery === true);

  return data;
}

export function FilterByBrands(state, data) {
  const { brandFilter } = state;
  return brandFilter.length > 0
    ? data.filter((product) => brandFilter.includes(product.brand))
    : data;
}

export function FilterByCategories(state, data) {
  const { categoryFilter } = state;
  return categoryFilter.length > 0
    ? data.filter((product) => categoryFilter.includes(product.categoryName))
    : data;
}

export function FilterByRatings(state, data) {
  const { ratingFilter } = state;
  if (ratingFilter === null) return data;
  switch (ratingFilter) {
    case "FOUR_AND_ABOVE":
      return data.filter((product) => product.rating >= 4);
    case "THREE_AND_ABOVE":
      return data.filter((product) => product.rating >= 3);
    case "TWO_AND_ABOVE":
      return data.filter((product) => product.rating >= 2);
    case "ONE_AND_ABOVE":
      return data.filter((product) => product.rating >= 1);
  }
}

export function FilterBySearchValue(state, data) {
  if (state.searchValue !== "") {
    let { searchValue } = state;
    searchValue = searchValue.toLowerCase();
    return data.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchValue) ||
        product.categoryName.toLowerCase().includes(searchValue)
    );
  }
  return data;
}
