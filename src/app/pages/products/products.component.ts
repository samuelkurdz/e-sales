import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { products } from 'src/app/core/products';
import * as shopSelectors from 'src/app/store/shop/shop.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products: Product[] = products;
  products$: Observable<Product[]>;

  constructor(
    private titleService: Title,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('All Products - Nuella');
    this.products$ = this.store.select(shopSelectors.selectProducts);
  }

}
