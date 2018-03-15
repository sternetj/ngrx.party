import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { debounceTime, exhaustMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  ADD_SONG,
  AddSong,
  GET_ALL_SONGS,
  GetAllSongs,
  SetAddedSongs,
  SetSearchResults,
  UPDATE_SEARCH,
  UpdateSearch,
} from './songs.actions';
import { SongService } from '../../../shared/services/songs.service';

@Injectable()
export class SongsEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType(UPDATE_SEARCH),
    debounceTime(1000),
    exhaustMap((action: UpdateSearch) =>
      this.songService
        .search(action.search)
        .pipe(map(data => new SetSearchResults(data)))
    )
  );

  @Effect()
  addSong$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_SONG),
    exhaustMap((action: AddSong) =>
      this.songService
        .create(action.song)
        .pipe(map(data => new SetAddedSongs(data)))
    )
  );

  @Effect()
  getSongs$: Observable<Action> = this.actions$.pipe(
    ofType(GET_ALL_SONGS),
    exhaustMap((action: GetAllSongs) =>
      this.songService.getAll().pipe(map(data => new SetAddedSongs(data)))
    )
  );

  constructor(private songService: SongService, private actions$: Actions) {}
}
