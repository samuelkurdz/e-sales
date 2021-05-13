import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
 
@Injectable()
export class ShopEffects {
 
  // loadMovies$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Movies Page] Load Movies'),
  //   mergeMap(() => this.moviesService.getAll()
  //     .pipe(
  //       map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}