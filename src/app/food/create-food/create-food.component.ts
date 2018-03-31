import { Component, EventEmitter, Output, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('nameInput') private input: ElementRef;

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

    this.input.nativeElement.focus();
    this.form.reset({
      willBring: true,
      count: 1,
    });
    this.newFood.users = [];

  }
}
