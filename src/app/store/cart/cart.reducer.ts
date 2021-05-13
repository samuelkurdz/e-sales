import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import * as cartActions from './cart.actions';
import { addItemToCartUtil, removeItemFromCartUtil } from "./cart.utils";


export interface CartItem {
  product: Product,
  quantity: number
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
    cartActions.addProductToCart, (state, {product, quantity}) => ({...state, cartItems: addItemToCartUtil(state.cartItems, product, quantity) })
  ),
  on(
    cartActions.removeProductFromCart, (state, {product}) => ({...state, cartItems: removeItemFromCartUtil(state.cartItems, product)})
  )
)