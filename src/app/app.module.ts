import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OverviewComponent } from './overview/overview.component';
import { AppRoutingMoudle } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingMoudle,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
