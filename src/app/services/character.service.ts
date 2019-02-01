import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private _http: HttpClient
  ) { }

  getCharacters(): Observable<Character[]> {
    return this._http
      .get<Character[]>('../../db.json')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
