import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SuppliesService } from '../shared/services/supplies.service';

@NgModule({
    imports: [
      BrowserAnimationsModule,
    ],
    providers: [
        SuppliesService,
    ]
})
export class CoreModule {}
