import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as structureActions from './structures.actions';
import * as structureSelectors from './structures.selectors';
 
@Injectable()
export class StructuresEffects {

  toggleBodyScroll(isCartVisible: boolean) {
    if (isCartVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }
  
  toggleBodyScrollEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(structureActions.toggleNavbarDisplay),
      concatLatestFrom(() => this.store.select(structureSelectors.selectNavbarVisibility)),
      tap(([action, isNavbarOpen]) => {
        this.toggleBodyScroll(isNavbarOpen);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}