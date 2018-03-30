import { Component, EventEmitter, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Food } from '../../shared/models/food';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateFoodComponent {
  @ViewChild(NgForm) private form: NgForm;
  public newFood: Food = {
    id: undefined,
    name: undefined,
    description: undefined,
    count: 1,
    obtained: false,
    users: [],
  };
  public willBring = true;

  @Output() private addItem = new EventEmitter<{food: Food, willBring: boolean}>();

  public addFood() {
    this.addItem.emit({
      food: this.newFood,
      willBring: this.willBring,
    });

    this.form.reset();
    this.newFood.count = 1;
    this.newFood.users = [];
    this.willBring = true;
  }
}
