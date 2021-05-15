import { AccountEffects } from "./account/account.effects";
import { CartEffects } from "./cart/cart.effects";
import { ShopEffects } from "./shop/shop.effects";
import { StructuresEffects } from "./structures/structures.effects";

export const allEffects = [
  CartEffects,
  ShopEffects,
  AccountEffects,
  StructuresEffects
]