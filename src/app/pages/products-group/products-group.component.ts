import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-group',
  templateUrl: './products-group.component.html',
  styleUrls: ['./products-group.component.scss']
})
export class ProductsGroupComponent {
  
  @Input() products: Product[];

  constructor() { }

  

}
