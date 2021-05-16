import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
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
  featuredProducts$: Observable<Product[]>;
  onDestroy$: Subject<boolean> = new Subject<boolean>();
  addCartItemForm: FormGroup;

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.processRouteData();
  }
  
  processRouteData() {
    this.activatedRoute.params
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((params) => {
        this.productId = params.productId;
        this.getActiveProduct(this.productId);
        this.initiateForm();
      });
  }

  getActiveProduct(productId: string) {
    this.store.select(selectSingleProduct, { productId: productId })
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((product) => {
      this.activeProduct = product;
      this.featuredProducts$ = this.store.select(selectRelatedProducts);
    });
  }

  initiateForm() {
    this.addCartItemForm = this.formBuilder.group({
      numberOfItems: [1, Validators.compose([Validators.min(1), Validators.required])],
      preferredSize: [null]
    });

    // this.addCartItemForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // })
  }

  addProductToCart(product: Product) {
    this.store.dispatch(addProductToCart({
      product,
      quantity: this.addCartItemForm.controls.numberOfItems.value || 1,
      preferredVariation: this.addCartItemForm.controls.preferredSize.value
    }));
  }


  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

}
