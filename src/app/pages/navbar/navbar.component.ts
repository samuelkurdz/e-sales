import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toggleCartVisibility } from 'src/app/store/cart/cart.actions';
import { selectCartItemsNumber, selectCartVisibility } from 'src/app/store/cart/cart.selectors';
import { toggleNavbarDisplay } from 'src/app/store/structures/structures.actions';
import { selectNavbarVisibility } from 'src/app/store/structures/structures.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isNavBarOpen: boolean;
  isCartVisible$: Observable<boolean>;
  numberOfItemsInCart$: Observable<number>;

  onDestroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isCartVisible$ = this.store.select(selectCartVisibility);
    this.numberOfItemsInCart$ = this.store.select(selectCartItemsNumber);
    this.getNavbarDisplayState();
  }

  getNavbarDisplayState() {
    this.store.select(selectNavbarVisibility)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((navbarState) => {
      this.isNavBarOpen = navbarState;
    })
  }

  routeHandler(route: string) {
    if (this.isNavBarOpen) {
      this.toggleNavbarState();
    }
    this.router.navigateByUrl(route);
  }

  toggleNavbarState() {
    this.store.dispatch(toggleNavbarDisplay())
  }

  toggleCartState() {
    this.store.dispatch(toggleCartVisibility())
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

}
