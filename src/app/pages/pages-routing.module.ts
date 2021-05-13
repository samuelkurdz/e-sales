import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AccountComponent } from './account/account.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:productId',
        component: ProductDetailComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

export const routedComponents = [
  PageLayoutComponent,
  LandingComponent,
  ProductsComponent,
  ProductDetailComponent,
  AccountComponent,
  CheckoutComponent
];
