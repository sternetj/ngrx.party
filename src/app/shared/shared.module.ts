import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatProgressBarModule, MatDialogModule } from '@angular/material';

@NgModule({
    exports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatProgressBarModule,
      ]
})
export class SharedModule { }
