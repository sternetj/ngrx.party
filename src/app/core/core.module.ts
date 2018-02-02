import { NgModule } from '@angular/core';
import { SuppliesService } from '../shared/services/supplies.service';

@NgModule({
    providers: [
        SuppliesService,
    ]
})
export class CoreModule {}
