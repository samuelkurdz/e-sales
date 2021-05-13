import { AccountEffects } from "./account/account.effects";
import { CartEffects } from "./cart/cart.effects";
import { ShopEffects } from "./shop/shop.effects";

export const allEffects = [
  CartEffects,
  ShopEffects,
  AccountEffects
]