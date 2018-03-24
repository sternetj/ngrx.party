import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SharedModule } from '../shared/shared.module';
import { GameWidgetComponent } from './game-widget/game-widget.component';
import { CreateGameComponent } from './create-game/create-game.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GameRoutingModule
  ],
  declarations: [
    GameComponent,
    GameWidgetComponent,
    CreateGameComponent
  ]
})
export class GameModule { }
