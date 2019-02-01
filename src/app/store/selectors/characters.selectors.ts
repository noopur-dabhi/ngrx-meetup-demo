import { createSelector } from '@ngrx/store';

export const getCharacterState = (appState) => {
  console.log('*****appState', appState);
  return appState;
};
