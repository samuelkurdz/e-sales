import { createSelector } from "@ngrx/store";
import { RootState } from "../app.reducer";


export const selectShop = (state: RootState) => state.shop;

export const selectProducts = createSelector(
  selectShop,
  (state) => state.products
);

export const selectOfferedProduct = createSelector(
  selectShop,
  (state) => state.offeredProduct
)

export const selectSingleProduct = createSelector(
  selectShop,
  // (state, props) => state.products.find(product => product.productName === props.productName)
  (state, props) => state.products[props.productId]
)

export const selectRelatedProducts = createSelector(
  selectShop,
  (state) => state.products.filter((product, index) => index < 4)
)