import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartItem } from 'src/app/store/cart/cart.reducer';
import { selectCartItems } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  cartItems: CartItem[];
  onDestroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.store.select(selectCartItems)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((items) => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

}
