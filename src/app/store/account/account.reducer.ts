import {createReducer, on} from '@ngrx/store';
import * as AccountActions from './account.actions';

export interface AccountStateInterface {
  userName: string;
  email: string;
}

export const initialAccountState: AccountStateInterface = {
  userName: '',
  email: ''
};

export const accountReducer = createReducer(
  initialAccountState,
  on(
    AccountActions.setUserName, (state: AccountStateInterface, {userName, email}) => ({...state, userName, email})
    )
);
