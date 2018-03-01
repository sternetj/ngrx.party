import { SetUser } from './core/state/user/user.actions';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { filter, take } from 'rxjs/operators';

import { FoodService } from './shared/services/food.service';
import { Food } from './shared/models/food';
import { WelcomeModalComponent } from './core/welcome-modal/welcome-modal.component';
import { AppState, selectUser } from './core/state';
import { State } from './core/state/user/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user$: Observable<State>;
  public navLinks = [
    {
      path: '/',
      label: 'Home',
    },
    // {
    //   path: '/videos',
    //   lable: 'Food',
    // },
    {
      path: '/food',
      label: 'Food',
    },
    // {
    //   path: '/games',
    //   lable: 'Games',
    // }
  ];

  constructor(private foodService: FoodService,
    private store: Store<AppState>,
    private dialog: MatDialog) {}

  public ngOnInit() {
    this.user$ = this.store.select(selectUser);
    const food = new Food();
    food.name = 'Nachos';
    food.count = 1;
    food.obtained = true;

    this.foodService.create(food).subscribe();

    this.foodService.getAll().subscribe(food => {
      console.log(food);
    });

    this.user$.pipe(
      filter((user) => !user.isSet),
      take(1)
    ).subscribe(() => {
      setTimeout(() => this.openWelcomModal());
    });

    window.onbeforeunload = () => {
      this.user$.pipe(take(1)).subscribe((user) => {
        window.localStorage.setItem('user-info', JSON.stringify(user));
      });
    };
  }

  public openWelcomModal() {
    this.dialog.open(WelcomeModalComponent, {
      disableClose: true
    }).afterClosed().subscribe((user: {name: string, logo: string}) => {
      this.store.dispatch(new SetUser(user.name, user.logo));
    });
  }
}
