import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCharacters from './characters.reducers';

export interface MarvelState {
  characters: fromCharacters.CharacterState;
}

export const reducers: ActionReducerMap<MarvelState> = {
  characters: fromCharacters.reducer
};

export const getMarvelState = createFeatureSelector<MarvelState>(
  'marvel'
);
