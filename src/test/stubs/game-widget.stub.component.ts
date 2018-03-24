import { Component, Input } from '@angular/core';
import { Game } from '../../app/shared/models/game';

@Component({
  selector: 'app-game-widget',
  template: ''
})
export class GameWidgetStubComponent {
  @Input() public game: Game;
}
