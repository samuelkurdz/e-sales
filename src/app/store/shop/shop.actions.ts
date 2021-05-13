import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.model';

export const setProducts = createAction(
  '[Shop] Set Products',
  props<{products: Product[]}>()
)

export const setSpecialOfferProduct = createAction(
  '[SHOP] Set Offered product',
  props<{product: Product}>()
)