import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import * as ShopActions from './shop.actions';


export interface ShopStateInterface {
  products: Product[],
  offeredProduct: Product
}

export const initialShopState: ShopStateInterface = {
  products: [],
  offeredProduct: null
};

export const shopReducer = createReducer(
  initialShopState,
  on(
    ShopActions.setProducts, (state, { products }) => ({...state, products})
  ),
  on(
    ShopActions.setSpecialOfferProduct, (state, { product: offeredProduct }) => ({...state, offeredProduct})
  )
)