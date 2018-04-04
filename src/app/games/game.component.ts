import { CreateGame } from './../core/state/game/game.actions';
import { take, filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AppState, selectGames, selectUser } from './../core/state/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../shared/models/game';
import { State } from '../core/state/user/user.reducer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public games$: Observable<Game[]>;

  public currentUser: State;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.games$ = this.store.select(selectGames);

    this.store.select(selectUser).pipe(take(1)).subscribe((user) => this.currentUser = user);
  }

  public addGame(game: Game) {
    game.user = this.currentUser;

    this.store.dispatch(new CreateGame(game));
  }
}
