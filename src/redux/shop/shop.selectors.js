import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

//memoizing the return of the function
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], 
    collections => collections[collectionUrlParam])
  );

  // Data normalization in converting an arra to an object