import {
    filterComposer, SortByPrice,
    FilterByBrands, FilterByCategories,
    FilterByExcludeOutOfStock, FilterByFastDelivery,
    FilterByRange, FilterByRatings, FilterBySearchValue
} from "../Utils/filterComposer";

export function getFilterProducts(state, originalData) {
    return filterComposer(state, originalData, SortByPrice, FilterByBrands, FilterByCategories, FilterByExcludeOutOfStock, FilterByFastDelivery, FilterByRange, FilterByRatings, FilterBySearchValue)
}