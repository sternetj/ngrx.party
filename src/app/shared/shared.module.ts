import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatProgressBarModule, MatDialogModule, MatTabsModule, MatIconModule,
         MatInputModule, MatTooltipModule, MatExpansionModule, MatCheckboxModule, MatDividerModule, MatProgressSpinnerModule } from '@angular/material';
import { UserIconComponent } from './components/user-icon/user-icon.component';

@NgModule({
    exports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatIconModule,
      MatInputModule,
      MatTooltipModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
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
