import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, exhaustMap } from 'rxjs/operators';

import { GameService } from '../../../shared/services/game.service';

import { GET_GAME, ADD_GAME, AddGame, CreateGame, SetGame, CREATE_GAME } from './game.actions';

@Injectable()
export class GameEffects {

  @Effect() fetch$: Observable<Action> = this.actions$.pipe(
    ofType(GET_GAME),
    exhaustMap(action =>
      this.gameService.getAll().pipe(
        map(data => new SetGame(data)),
      )
    )
  );

  @Effect() add$: Observable<Action> = this.actions$.pipe(
    ofType(CREATE_GAME),
    exhaustMap((action: CreateGame) =>
      this.gameService.create(action.game).pipe(
        map(data => new AddGame(data)),
    ))
  );

  constructor(
    private gameService: GameService,
    private actions$: Actions,
  ) {}
}
