import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatProgressBarModule, MatDialogModule } from '@angular/material';
import { UserIconComponent } from './components/user-icon/user-icon.component';

@NgModule({
    exports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatProgressBarModule,
      UserIconComponent,
    ],
    imports: [
      CommonModule,
    ],
    declarations: [
      UserIconComponent
    ]
})
export class SharedModule { }
