import { createSelector } from "@ngrx/store";
import { RootState } from "../app.reducer";


export const selectStructure = (state: RootState) => state.structure;

export const selectNavbarVisibility = createSelector(
  selectStructure,
  (state) => state.isNavbarOpen
);