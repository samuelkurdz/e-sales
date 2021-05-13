import {createAction, props} from '@ngrx/store';

export const setUserName = createAction(
  '[Account] Set UserName',
  props<{userName: string, email: string}>()
);
