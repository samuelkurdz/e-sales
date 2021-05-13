import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule, routedComponents } from './pages-routing.module';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsGroupComponent } from './products-group/products-group.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ...routedComponents,
    NavbarComponent,
    FooterComponent,
    CartIconComponent,
    ProductsGroupComponent,
    StarRatingComponent,
    CartModalComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
