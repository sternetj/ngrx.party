import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule, MatButtonModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SuppliesService } from '../shared/services/supplies.service';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { reducers } from './state';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
      BrowserAnimationsModule,
      SharedModule,
      MatButtonModule,
      MatDialogModule,
      MatInputModule,
      MatTooltipModule,
      HttpClientModule,
      StoreModule.forRoot(reducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      }),
    ],
    providers: [
        SuppliesService
    ],
    declarations: [WelcomeModalComponent, RegisterComponent],
    entryComponents: [
      WelcomeModalComponent,
    ]
})
export class CoreModule {}
