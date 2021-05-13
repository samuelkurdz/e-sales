import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as cartActions from './cart.actions';
import * as cartSelectors from './cart.selectors';
 
@Injectable()
export class CartEffects {
 
  // loadMovies$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Movies Page] Load Movies'),
  //   mergeMap(() => this.moviesService.getAll()
  //     .pipe(
  //       map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );

  toggleBodyScroll(isCartVisible: boolean) {
    if (isCartVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }
  
  // names$ = of({name: 'sam', age: 34});
  toggleBodyScrollEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(cartActions.toggleCartVisibility),
      // withLatestFrom(this.names$),
      // withLatestFrom(this.store.select(cartSelectors.selectCartVisibility)),
      // concatLatestFrom(() => this.names$),
      concatLatestFrom(() => this.store.select(cartSelectors.selectCartVisibility)),
      tap(([action, isCartVisible]) => {
        this.toggleBodyScroll(isCartVisible);
        // console.log(action, data);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}