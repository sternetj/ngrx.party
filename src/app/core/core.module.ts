import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '../shared/shared.module';
import { FoodService } from '../shared/services/food.service';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { reducers, effects } from './state';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
      BrowserAnimationsModule,
      SharedModule,
      HttpClientModule,
      StoreModule.forRoot(reducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      }),
    ],
    providers: [
      FoodService
    ],
    declarations: [WelcomeModalComponent, RegisterComponent],
    entryComponents: [
      WelcomeModalComponent,
    ]
})
export class CoreModule {}
