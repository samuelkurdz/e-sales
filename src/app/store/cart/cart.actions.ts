import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";


export const addProductToCart = createAction(
  '[CART] Add Product',
  props<{ product: Product, quantity: number }>()
)

export const toggleCartVisibility = createAction(
  "[CART] Toggle Cart Modal",
)

export const removeProductFromCart = createAction(
  '[CART] Remove Product',
  props<{ product: Product }>()
)