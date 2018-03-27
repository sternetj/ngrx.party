import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/game';

@Injectable()
export class GameService {

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<Game[]>(`/api/games`);
    }

    public get(id: string) {
        return this.http.get<Game>(`/api/games/${id}`);
    }

    public create(game: Game) {
        return this.http.post<Game>(`/api/games`, game);
    }
}
