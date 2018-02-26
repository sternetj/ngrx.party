import { AddSupply } from './../core/state/supplies/supplies.actions';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AppState, selectFood, selectUser } from './../core/state/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Supply } from '../shared/models/supply';
import { State } from '../core/state/user/user.reducer';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public food$: Observable<Supply[]>;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.food$ = this.store.select(selectFood);
  }

  public addFood(event: {supply: Supply, willBring: boolean}) {
    if (event.willBring) {
      let currentUser: State;
      this.store.select(selectUser).pipe(take(1)).subscribe((user) => currentUser = user);

      event.supply.users.push(currentUser);
    }

    this.store.dispatch(new AddSupply(event.supply));
  }
}
