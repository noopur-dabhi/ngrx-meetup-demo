import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as characterAction from '../store/actions/characters.actions';
import * as characterSelector from '../store/selectors/characters.selectors';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  constructor(
    private _store: Store<any>
  ) { }

  ngOnInit() {
    this._store.dispatch(new characterAction.LoadCharacters());

    this._store.select(characterSelector.getCharacters).subscribe(data => {
      this.characters = data;
    });
  }

  getCharacterImage = (character) => {
    return '../../assets/images/' + character.character + '.jpeg';
  }

}
