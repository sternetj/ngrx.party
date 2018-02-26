import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnChanges {
  @Input() private color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() public size = 40;
  @Input() public logo: string;
  public colorHex: string;

  ngOnChanges() {
    switch (this.color) {
      case 'primary':
        this.colorHex = '#3f51b5';
        break;
      case 'accent':
        this.colorHex = '#ff4081';
        break;
      case 'warn':
        this.colorHex = '#f44336';
        break;
    }
  }

}
