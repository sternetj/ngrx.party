import { SetUser } from './core/state/user/user.actions';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { filter, take } from 'rxjs/operators';

import { Food } from './shared/models/food';
import { WelcomeModalComponent } from './core/welcome-modal/welcome-modal.component';
import { AppState, selectUser, selectSongs, notificationSelectors } from './core/state';
import { State } from './core/state/user/user.reducer';

import { Subject } from 'rxjs/Subject';

import { WebSocketService } from './shared/services/websocket.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  animateChild
} from '@angular/animations';
import { GetFood } from './core/state/food/food.actions';
import { GetGame } from './core/state/game/game.actions';
import { GetAllSongs } from './core/state/songs/songs.actions';
import { ClearNotifications } from './core/state/notifications/notifications.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('partyStartedBody', [
      transition(':leave', [query('@*', [animateChild()])])
    ]),
    trigger('partyStateLeftColumn', [
      transition(':leave', [
        style({}),
        animate(
          '300ms ease-in',
          style({
            transform: 'translateX(-100%)',
            maxHeight: '100vh'
          })
        )
      ])
    ]),
    trigger('partyStateRightColumn', [
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({
            transform: 'translateX(100%)',
            maxHeight: '100vh'
          })
        )
      ])
    ]),
    trigger('partyStateHeader', [
      transition(':leave', [
        style({
          transform: 'translateY(0%)'
        }),
        animate(
          '300ms ease-in',
          style({
            transform: 'translateY(-115%)'
          })
        )
      ])
    ]),
    trigger('videoContainer', [
      state('started', style({ 'background-color': '#000' })),
      transition('* => started', [
        animate('500ms ease-in')
      ], { delay: 200 })
    ])
  ]
})
export class AppComponent implements OnInit {
  public user$: Observable<State>;
  public notifications$;
  public mouseOver = false;
  public buttonHover = false;

  public showNotifications = false;

  public navLinks = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/songs',
      label: 'Songs'
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

  public partyState = '';

  @ViewChild('player') private player: ElementRef;

  constructor(
    private store: Store<AppState>,
    private wsService: WebSocketService,
    private dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.store.dispatch(new GetFood());
    this.store.dispatch(new GetGame());
    this.store.dispatch(new GetAllSongs());

    this.user$ = this.store.select(selectUser);

    this.notifications$ = this.store.select(notificationSelectors.notifications);


    this.user$.pipe(
      filter((user) => !user.isSet),
      take(1)
    ).subscribe(() => {
      setTimeout(() => this.openWelcomModal());
    });

    window.onbeforeunload = () => {
      this.user$.pipe(take(1)).subscribe(user => {
        window.localStorage.setItem('user-info', JSON.stringify(user));
      });
    };

    this.store.dispatch(new GetFood());
  }

  public clearNotifications() {
    this.store.dispatch(new ClearNotifications());
  }

  public openWelcomModal() {
    this.dialog
      .open(WelcomeModalComponent, {
        disableClose: true
      })
      .afterClosed()
      .subscribe((user: { name: string; logo: string }) => {
        this.store.dispatch(new SetUser(user.name, user.logo));
      });
  }

  public startParty() {
    this.partyState = 'started';

    this.store.select(selectSongs).pipe(take(1)).subscribe((songs) => {
      const songIds = songs.addedSongs.map((song) => song.id);

      const YT = (window as any).YT;
      setTimeout(() => {
        const player = new YT.Player(this.player.nativeElement, {
          height: window.innerHeight,
          width: window.innerWidth,
          videoId: songIds[0],
          playerVars: {
            autoplay: 1,
            showinfo: 0,
            loop: 1,
            playlist: songIds.slice(1).join(','),
          }
        });
      }, 650);
  });
  }
}
