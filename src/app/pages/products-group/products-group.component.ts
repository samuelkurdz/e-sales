import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-group',
  templateUrl: './products-group.component.html',
  styleUrls: ['./products-group.component.scss']
})
export class ProductsGroupComponent implements OnInit {
  
  @Input() products: Product[];

  constructor() { }

  ngOnInit(): void {

  }

}
