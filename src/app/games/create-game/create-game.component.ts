import { Component, EventEmitter, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Game } from '../../shared/models/game';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGameComponent {
  @ViewChild(NgForm) private form: NgForm;
  @Output() private addGame = new EventEmitter<Game>();

  public newGame: Game = new Game();

  public addNewGame() {
    this.addGame.emit(this.newGame);

    this.form.reset();
  }
}
