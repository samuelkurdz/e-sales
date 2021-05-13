import { createSelector } from "@ngrx/store";
import { RootState } from "../app.reducer";


export const selectCart = (state: RootState) => state.cart;

export const selectCartVisibility = createSelector(
  selectCart,
  (state) => state.isCartVisible
);

export const selectCartItems = createSelector(
  selectCart,
  (state) => state.cartItems
);

export const selectCartItemsNumber = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
  )
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + ( cartItem.quantity + cartItem.product.price), 0
  )
)
