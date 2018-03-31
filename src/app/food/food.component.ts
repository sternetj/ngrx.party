import { SetFood, AddFood, CreateFood, UpdateFood } from './../core/state/food/food.actions';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AppState, selectFood, selectUser } from './../core/state/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Food } from '../shared/models/food';
import { State } from '../core/state/user/user.reducer';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public food$: Observable<Food[]>;

  public currentUser: State;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.food$ = this.store.select(selectFood);

    this.store.select(selectUser).pipe(take(1)).subscribe((user) => this.currentUser = user);
  }

  public addFood(event: {food: Food, willBring: boolean}) {
    if (event.willBring) {
      event.food.users.push(this.currentUser);
    }

    this.store.dispatch(new CreateFood(event.food));
  }

  public updateFood(food: Food) {
    const newFood = {
      ...food,
      users: [
        ...food.users,
        this.currentUser,
      ]
    };

    this.store.dispatch(new UpdateFood(newFood));
  }

  public isUserBringing(food: Food) {
    return food.users.some((user) => user.name === this.currentUser.name);
  }
}
