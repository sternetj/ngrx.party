import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Song } from '../models/song';

@Injectable()
export class SongService {

    constructor(private http: HttpClient) { }

    public getAll() {
      return this.http.get<Song[]>(`/api/songs`);
    }

    public search(search: string) {
      return this.http.get<Song[]>(`/api/songs/search`, {params: new HttpParams().set('search', search)});
    }

    public create(song: Song) {
      return this.http.post<Song[]>(`/api/songs`, song);
    }
}
