import { Component, Input } from '@angular/core';
import { Supply } from '../../app/shared/models/supply';

@Component({
  selector: 'app-item-widget',
  template: ''
})
export class ItemWidgetStubComponent {
  @Input() public supply: Supply;
}
