import { RootState } from '../app.reducer';
import {createSelector} from '@ngrx/store';

export const selectAccount = (state: RootState) => state.account;

export const selectUserName = createSelector(
  selectAccount,
  (state) => state.userName
);

export const selectUserEmail = createSelector(
  selectAccount,
  (state) => state.email
);

export const selectAccountDetails = createSelector(
  selectAccount,
  (state) => {
    return {userName: state.userName, email: state.email};
  }
);

