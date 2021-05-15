import { createReducer, on } from "@ngrx/store";
import * as structureActions from './structures.actions';


export interface StructureStateInterface {
  isNavbarOpen: boolean;
}


export const initialStructureState: StructureStateInterface = {
  isNavbarOpen: false,
}


export const structureReducer = createReducer(
  initialStructureState,
  on(
    structureActions.toggleNavbarDisplay, (state) => ({...state, isNavbarOpen: !state.isNavbarOpen})
  ),
)