import { SetUser } from './core/state/user/user.actions';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { filter, take } from 'rxjs/operators';

import { Food } from './shared/models/food';
import { WelcomeModalComponent } from './core/welcome-modal/welcome-modal.component';
import { AppState, selectUser, notificationSelectors } from './core/state';
import { State } from './core/state/user/user.reducer';

import { Subject } from 'rxjs/Subject';

import { WebSocketService } from './shared/services/websocket.service';
import { ClearNotifications } from './core/state/notifications/notifications.actions';
import { GetFood } from './core/state/food/food.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user$: Observable<State>;
  public notifications$;

  public showNotifications = false;

  public navLinks = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/songs',
      label: 'Songs',
    },
    {
      path: '/food',
      label: 'Food',
    },
    {
      path: '/games',
      label: 'Games',
    }
  ];

  constructor(private store: Store<AppState>,
    private wsService: WebSocketService,
    private dialog: MatDialog) {}

  public ngOnInit() {
    this.user$ = this.store.select(selectUser);

    this.notifications$ = this.store.select(notificationSelectors.notifications);


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

    this.store.dispatch(new GetFood());
  }

  public clearNotifications() {
    this.store.dispatch(new ClearNotifications());
  }

  public openWelcomModal() {
    this.dialog.open(WelcomeModalComponent, {
      disableClose: true
    }).afterClosed().subscribe((user: {name: string, logo: string}) => {
      this.store.dispatch(new SetUser(user.name, user.logo));
    });
  }
}
