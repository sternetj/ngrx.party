import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Food } from '../../app/shared/models/food';

@Component({
  selector: 'app-item-widget',
  template: ''
})
export class ItemWidgetStubComponent {
  @Input() public food: Food;
  @Input() public bringDisabled: boolean;
  @Output() public bringingFood = new EventEmitter();
}
