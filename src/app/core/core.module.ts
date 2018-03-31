import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '../shared/shared.module';
import { FoodService } from '../shared/services/food.service';
import { WebSocketService } from '../shared/services/websocket.service';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { reducers, effects } from './state';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SongService } from '../shared/services/songs.service';
import { GameService } from '../shared/services/game.service';

@NgModule({
    imports: [
      BrowserAnimationsModule,
      SharedModule,
      HttpClientModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot(effects),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      }),
    ],
    providers: [
      FoodService,
      GameService,
      SongService,
      WebSocketService,
    ],
    declarations: [WelcomeModalComponent, HomeComponent],
    entryComponents: [
      WelcomeModalComponent,
    ]
})
export class CoreModule {}
