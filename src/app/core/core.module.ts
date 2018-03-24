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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { SongService } from '../shared/services/songs.service';
import { ErrorInterceptor } from './guards/error.interceptor';

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
      SongService,
      WebSocketService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true,
      }
    ],
    declarations: [WelcomeModalComponent, RegisterComponent],
    entryComponents: [
      WelcomeModalComponent,
    ]
})
export class CoreModule {}
