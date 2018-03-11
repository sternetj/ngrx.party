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

@Injectable()
export class WebSocketService {
    private subject: Subject<MessageEvent>;

    public wsSocket;

    public connect(url): Subject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url);
        }

        return this.subject;
    }

    public update(key: string, data: any) {
        this.wsSocket.next({
            key,
            data,
        });
    }

    public disconnect() {
      this.subject.complete();
    }

    constructor(private store: Store<AppState>) {
        this.wsSocket = this.connect('ws://' + environment.websocketEndpoint);

        const incomingMessage$ = this.wsSocket.pipe(
            filter((message) => !!message),
            map((message: any) => message.data),
            map((data: any) => JSON.parse(data)),
        );

        incomingMessage$.pipe(
          filter((message: {type: string}) => message.type === 'food')
        ).subscribe((message) => {
            this.store.dispatch(new SetFood(message.data));
        });

        incomingMessage$.pipe(
          filter((message: {type: string}) => message.type === 'song')
        ).subscribe((message) => {
            this.store.dispatch(new SetAddedSongs(message.data));
        });

        Observable.timer(0, 15000).subscribe(() => {
          this.update('KEEP_ALIVE', null);
        });
    }

    private create(url): Subject<MessageEvent> {
        const ws = new WebSocket(url);

        const observable: Observable<any> = Observable.create((obs: Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);

            return ws.close.bind(ws);
        });

        const observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };

        return Subject.create(observer, observable);
    }
}
