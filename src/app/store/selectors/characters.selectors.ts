import { createSelector } from '@ngrx/store';

export const getCharacterState = (appState) => appState;

export const getCharacters = createSelector(getCharacterState, (state) => state.characters.entities);
