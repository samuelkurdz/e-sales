import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/core/models/product.model';
import { products } from 'src/app/core/products';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  products: Product[] = products;
  featuredProducts: Product[];
  latestProducts: Product[];

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nuella Stores');
    this.featuredProducts = this.products.filter((product, index) => index < 4);
    this.latestProducts = this.products.filter((product, index) => index >= 4);
  }

}
