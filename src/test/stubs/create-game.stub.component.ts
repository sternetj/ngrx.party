import { Component, Output, EventEmitter } from '@angular/core';
import { Game } from '../../app/shared/models/game';


@Component({
  selector: 'app-create-game',
  template: '',
})
export class CreateGameStubComponent {
  @Output() private addGame = new EventEmitter<Game>();
}
