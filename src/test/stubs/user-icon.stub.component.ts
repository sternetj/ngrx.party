import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  template: ''
})
export class UserIconStubComponent {
  @Input() private color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() public size: 40;
  @Input() public logo: string;
}
