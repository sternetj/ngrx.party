import {
  Injectable
 } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Game } from '../models/game';

@Injectable()
export class GameStateService {
    public currentGames$ = new BehaviorSubject<Game[]>([]);
}
