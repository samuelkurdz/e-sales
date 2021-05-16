import { Product } from "src/app/core/models/product.model";
import { CartItem } from "./cart.reducer";

export const addItemToCartUtil = (cartItems: CartItem[], cartItemToAdd: Product, quantityToAdd: number, preferredVariation) => {
  const existingCartItem = cartItems.find(item => item.product.productName === cartItemToAdd.productName);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.product.productName === cartItemToAdd.productName ?
        { ...cartItem, quantity: quantityToAdd ? cartItem.quantity + quantityToAdd : cartItem.quantity + 1, preferredVariation } :
        cartItem
    )
  } else {
    return [...cartItems, 
      { product: cartItemToAdd, quantity:quantityToAdd, preferredVariation }
    ];
  }
}

export const removeItemFromCartUtil = (cartItems: CartItem[], cartItemToRemove : Product) => {
  const existingCartItem = cartItems.find(item => item.product.productName === cartItemToRemove.productName);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.product.productName !== cartItemToRemove.productName);
  }

  return cartItems.map(
    cartItem => cartItem.product.productName === cartItemToRemove.productName ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  )
}
