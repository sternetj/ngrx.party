import { Component } from '@angular/core';
import { Game } from '../shared/models/game';
import { GameStateService } from '../shared/services/game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  public games: Game[] = [];

  constructor(private gameState: GameStateService) { }

  public addGame(game: Game) {
    game.user = JSON.parse(window.localStorage.getItem('user-info'));

    this.games = [...this.games, Object.assign({}, game)];
    this.gameState.currentGames$.next(this.games);
  }
}
