import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

//memoizing the return of the function   // Data normalization is converting an array in to an object
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], 
    collections => collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching =  createSelector(
  [selectShop],
  shop => shop.isFetching
)

// with double band if collections is loaded, will return true
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop=> !!shop.collections
)