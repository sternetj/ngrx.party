import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatProgressBarModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { UserIconComponent } from './components/user-icon/user-icon.component';

@NgModule({
    exports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatProgressBarModule,
      MatTabsModule,
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
