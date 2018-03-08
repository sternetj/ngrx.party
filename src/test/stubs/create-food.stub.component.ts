import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from '../../app/shared/models/food';


@Component({
  selector: 'app-create-food',
  template: '',
})
export class CreateFoodStubComponent {
  @Output() private addItem = new EventEmitter<{food: Food, willBring: boolean}>();
}
