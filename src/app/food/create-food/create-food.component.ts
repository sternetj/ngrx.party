import { Component, EventEmitter, Output } from '@angular/core';
import { Supply } from '../../shared/models/supply';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent {
  public newSupply: Supply = {
    id: undefined,
    name: undefined,
    description: undefined,
    count: 1,
    obtained: false,
    users: [],
  };
  public willBring = true;

  @Output() private addItem = new EventEmitter<{supply: Supply, willBring: boolean}>();

  public addSupply() {
    this.addItem.emit({
      supply: this.newSupply,
      willBring: this.willBring,
    });

    this.newSupply = new Supply();
    this.newSupply.count = 1;
    this.newSupply.users = [];
    this.willBring = true;
  }
}
