import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { CharacterService } from '../../services/character.service';
import * as characterActions from '../actions/characters.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CharacterEffects {
  constructor(
    private _actions$: Actions,
    private _characterService: CharacterService
  ) {}

  @Effect()
  loadCharacters$ = this._actions$.ofType(characterActions.LOAD_CHARACTERS).pipe(
    switchMap(() => {
      return this._characterService
        .getCharacters()
        .pipe(
          map(characters => new characterActions.LoadCharactersSuccess(characters)),
          catchError(error => of(new characterActions.LoadCharactersFail(error)))
        );
    })
  );
}
