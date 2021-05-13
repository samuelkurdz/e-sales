import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { products } from 'src/app/core/products';
import { setProducts, setSpecialOfferProduct } from 'src/app/store/shop/shop.actions';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setProducts({ products: products }));
    this.store.dispatch(setSpecialOfferProduct({ product: products[0] }));
  }

}
