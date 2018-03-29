import { Notification } from './../../../shared/models/notification';
import { Action } from '@ngrx/store';

export const ADD_NOTIFICATION = '[Notification] Set Notification';
export const CLEAR_NOTIFICATIONS = '[Notification] Clear Notification';


export class AddNotification implements Action {
    readonly type = ADD_NOTIFICATION;

    constructor (public notification: Notification) { }
}

export class ClearNotifications implements Action {
    readonly type = CLEAR_NOTIFICATIONS;
}

export type Actions = AddNotification | ClearNotifications;
