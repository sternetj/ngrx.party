import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Game } from '../../shared/models/game';

@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameWidgetComponent {
  @Input() public game: Game;
}
