import { Component, Output, EventEmitter } from '@angular/core';
import { Supply } from '../../app/shared/models/supply';


@Component({
  selector: 'app-create-food',
  template: '',
})
export class CreateFoodStubComponent {
  @Output() private addItem = new EventEmitter<{supply: Supply, willBring: boolean}>();
}
