import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { filter, map, debounceTime } from 'rxjs/operators';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';

import { Store } from '@ngrx/store';
import { AppState } from '../../core/state';

import { SetFood } from '../../core/state/food/food.actions';
import { environment } from '../../../environments/environment';
import { SetAddedSongs } from '../../core/state/songs/songs.actions';
import { SetGame } from '../../core/state/game/game.actions';
import { AddNotification } from '../../core/state/notifications/notifications.actions';
import { tap } from 'rxjs/operators/tap';
import { share } from 'rxjs/operators/share';

@Injectable()
export class WebSocketService {
  private subject: Subject<MessageEvent>;

  public wsSocket;
  public id: string;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }

    return this.subject;
  }

  public update(key: string, data: any = null) {
    this.wsSocket.next({
      key,
      data
    });
  }

  constructor(private store: Store<AppState>) {
    const protocol = window.location.protocol.toUpperCase() === 'HTTPS:' ? 'wss' : 'ws';
    this.wsSocket = this.connect(`${protocol}://${environment.websocketEndpoint}`);

    const incomingMessage$ = this.wsSocket.pipe(
      filter((message: any) => !!message && !!message.data),
      map((message: any) => JSON.parse(message.data)),
      share()
    );

    // implement Food pipe

// ws-messages

    Observable.timer(0, 15000).subscribe(() => {
      this.update('KEEP_ALIVE');
    });
  }

  private create(url): Subject<MessageEvent> {
    const ws = new WebSocket(url);

    const observable: Observable<any> = Observable.create(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);

        return ws.close.bind(ws);
      }
    );

    const observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }
}
