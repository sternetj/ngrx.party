import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { AppState, foodSelectors, selectSongs, gameSelectors } from '../core/state';

import { Store } from '@ngrx/store';

import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators';
import { GameStateService } from '../shared/services/game-state.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{
  @Output() public startParty = new EventEmitter();

  public foodCount;
  public songCount;
  public countsSubscription;

  public gamesCount;

    public counts = {
      food: {
        bringing: 0,
        total: 0,
      },
      games: 0,
      songs: 0,
  };

  public countPercentage = 0;

  constructor(private gameState: GameStateService) {}

  public ngOnInit() {
    this.gameState.currentGames$.subscribe((games) => {
      this.gamesCount = games.length;
    })
  }
}
