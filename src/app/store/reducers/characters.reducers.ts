import { Character } from '../../models/character.model';
import * as characterActions from '../../store/actions/characters.actions';

export interface CharacterState {
  entities: Character[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: CharacterState = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: characterActions.CharacterActions
): CharacterState {
  switch (action.type) {
    case characterActions.LOAD_CHARACTERS: {
      return {
        ...state,
        loading: true,
      };
    }

    case characterActions.LOAD_CHARACTERS_SUCCESS: {
      const entities: Character[] = action.payload;

      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    }

    case characterActions.LOAD_CHARACTERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getCharacterEntities = (state: CharacterState) => state.entities;
export const getCharacterLoading = (state: CharacterState) => state.loading;
export const getCharacterLoaded = (state: CharacterState) => state.loaded;
