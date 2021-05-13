import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from 'src/app/core/models/product.model';
import { addProductToCart } from 'src/app/store/cart/cart.actions';
import { selectRelatedProducts, selectSingleProduct } from 'src/app/store/shop/shop.selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  productId: string;
  activeProduct: Product;
  featuredProducts: Product[];
  onDestroy$: Subject<boolean> = new Subject<boolean>();

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((params) => {
      this.productId = params.productId;
      this.getActiveProduct(this.productId);
      this.getRelatedProducts();
    })
  }
  
  getActiveProduct(productId: string) {
    this.store.select(selectSingleProduct, { productId: productId })
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((product) => {
      this.activeProduct = product;
    });
  }

  getRelatedProducts() {
    this.store.select(selectRelatedProducts)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((products) => {
      this.featuredProducts = products;
    });
  }

  addProductToCart(product: Product) {
    this.store.dispatch(addProductToCart({ product, quantity: 1 }))
  }


  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

}
