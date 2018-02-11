import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatProgressBarModule } from '@angular/material';

@NgModule({
    exports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
    ]
})
export class SharedModule { }
