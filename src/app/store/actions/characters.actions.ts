import { Action } from '@ngrx/store';

import { Character } from '../../models/character.model';

// Load Characters
export const LOAD_CHARACTERS = '[Marvel] Load Characters';
export const LOAD_CHARACTERS_FAIL = '[Marvel] Load Characters Fail';
export const LOAD_CHARACTERS_SUCCESS = '[Marvel] Load Characters Success';

export class LoadCharacters implements Action {
  readonly type = LOAD_CHARACTERS;
}

export class LoadCharactersFail implements Action {
  readonly type = LOAD_CHARACTERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadCharactersSuccess implements Action {
  readonly type = LOAD_CHARACTERS_SUCCESS;
  constructor(public payload: Character[]) {}
}

// action types
export type CharacterActions =
  | LoadCharacters
  | LoadCharactersFail
  | LoadCharactersSuccess;
