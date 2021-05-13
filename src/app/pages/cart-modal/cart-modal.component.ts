import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartItem } from 'src/app/store/cart/cart.reducer';
import { selectCartItems } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit, OnDestroy {

  cartItems: CartItem[];
  onDestroy$: Subject<boolean> = new Subject<boolean>();
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(
    private store: Store,
    private router: Router
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

  toggleModalState(): void {
    this.closeModal.emit(false);
  }

  navigateToCheckoutPage() {
    this.router.navigateByUrl('/checkout').then(() => {
      this.toggleModalState();
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

}
