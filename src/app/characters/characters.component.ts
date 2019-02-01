import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as characterAction from '../store/actions/characters.actions';
import * as characterSelector from '../store/selectors/characters.selectors';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private _store: Store<any>
  ) { }

  ngOnInit() {
    this._store.dispatch(new characterAction.LoadCharacters());

    this._store.select(characterSelector.getCharacterState).subscribe(data => {
      console.log('***data');
    });
  }

}
