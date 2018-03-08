import { SetFood, GetFood, AddFood } from './../core/state/food/food.actions';
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

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.food$ = this.store.select(selectFood);

    this.store.dispatch(new GetFood());
  }

  public addFood(event: {food: Food, willBring: boolean}) {
    if (event.willBring) {
      let currentUser: State;
      this.store.select(selectUser).pipe(take(1)).subscribe((user) => currentUser = user);

      event.food.users.push(currentUser);
    }

    this.store.dispatch(new AddFood(event.food));
  }
}
