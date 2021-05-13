import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toggleCartVisibility } from 'src/app/store/cart/cart.actions';
import { selectCartItemsNumber, selectCartVisibility } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isNavBarOpen: boolean;
  isCartVisible: boolean;
  numberOfItemsInCart: number;

  onDestroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    // this.isCartVisible = this.store.select(selectCartVisibility);
    this.getCartVisibilityState();
    this.getNumberOfItemsInCart()
  }

  getCartVisibilityState() {
    this.store.select(selectCartVisibility)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((isVisible) => {
      this.isCartVisible = isVisible;
    })
  }

  getNumberOfItemsInCart() {
    this.store.select(selectCartItemsNumber)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((noInCart) => {
      this.numberOfItemsInCart = noInCart;
    })
  }


  toggleCartState() {
    this.store.dispatch(toggleCartVisibility())
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

}
