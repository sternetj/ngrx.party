import { SetUser } from './core/state/user/user.actions';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { filter, take } from 'rxjs/operators';

import { SuppliesService } from './shared/services/supplies.service';
import { Supply } from './shared/models/supply';
import { WelcomeModalComponent } from './core/welcome-modal/welcome-modal.component';
import { AppState, selectUser } from './core/state';
import { State } from './core/state/user/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user$: Observable<State>;
  constructor(private supplies: SuppliesService,
    private store: Store<AppState>,
    private dialog: MatDialog) {}

  public ngOnInit() {
    this.user$ = this.store.select(selectUser);
    const supply = new Supply();
    supply.name = 'Nachos';
    supply.count = 1;
    supply.obtained = true;

    this.supplies.create(supply).subscribe();

    this.supplies.getAll().subscribe(supplies => {
      console.log(supplies);
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
      })
    }
  }

  public openWelcomModal() {
    this.dialog.open(WelcomeModalComponent, {
      disableClose: true
    }).afterClosed().subscribe((user: {name: string, logo: string}) => {
      this.store.dispatch(new SetUser(user.name, user.logo));
    });
  }
}
