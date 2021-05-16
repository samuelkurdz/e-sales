import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import * as cartActions from './cart.actions';
import { addItemToCartUtil, removeItemFromCartUtil } from "./cart.utils";


export interface CartItem {
  product: Product,
  quantity: number,
  preferredVariation: any
}

export interface CartStateInterface {
  isCartVisible: boolean;
  cartItems: CartItem[]
}

export const initialCartState: CartStateInterface = {
  isCartVisible: false,
  cartItems: []
}

export const cartReducer = createReducer(
  initialCartState,
  on(
    cartActions.toggleCartVisibility, (state) => ({...state, isCartVisible: !state.isCartVisible})
  ),
  on(
    // work on how to make preferred variations an array of different variations,
    // obtaining total product quantity from sum of different variations
    cartActions.addProductToCart, (state, {product, quantity, preferredVariation}) => ({...state, cartItems: addItemToCartUtil(state.cartItems, product, quantity, preferredVariation) })
  ),
  on(
    // work on how to make remove variations from an array of different variations,
    // obtaining total product quantity after removal of one variation or of entire product
    cartActions.removeProductFromCart, (state, {product}) => ({...state, cartItems: removeItemFromCartUtil(state.cartItems, product)})
  )
)