import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { filter, map } from 'rxjs/operators';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import { AppState } from '../../core/state';

import { SetFood } from '../../core/state/food/food.actions';

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

    constructor(private store: Store<AppState>) {
        this.wsSocket = this.connect('ws://localhost:3000');

        this.wsSocket.pipe(
            filter(message => !!message),
            map((message: any) => message.data),
            map((data: any) => JSON.parse(data).data)
        ).subscribe((data) => {
            this.store.dispatch(new SetFood(data));
        });
    }

    private create(url): Subject<MessageEvent> {
        const ws = new WebSocket(url);

        const observable = Observable.create((obs: Observer<MessageEvent>) => {
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