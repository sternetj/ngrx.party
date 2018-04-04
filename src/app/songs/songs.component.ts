import { AppState, selectSongs } from './../core/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Song } from '../shared/models/song';
import { UpdateSearch, ClearSearch, AddSong } from '../core/state/songs/songs.actions';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('app-search-result:not(:first-of-type)', style({ transform: 'translateY(-75%)' })),
        query('app-search-result', style({ opacity: 0 })),
        query('app-search-result', stagger('150ms', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0%)' })),
        ])),
      ])
    ])
  ]
})
export class SongsComponent implements OnInit {
  public search$: Observable<string>;
  public isSearching$: Observable<boolean>;
  public searchResults$: Observable<Song[]>;
  public addedSongs$: Observable<Song[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const songState$ = this.store.select(selectSongs);

    this.search$ = songState$.pipe(map((state) => state && state.search));
    this.isSearching$ = songState$.pipe(map((state) => state && state.searching));
    this.searchResults$ = songState$.pipe(
      map((state) => state && state.searchResults));
    this.addedSongs$ = songState$.pipe(map((state) => state && state.addedSongs));
  }

  public searchChanged(search: string) {
    this.store.dispatch(new UpdateSearch(search));
  }

  public clearSearch() {
    this.store.dispatch(new ClearSearch());
  }

  public addSong(song: Song) {
    this.store.dispatch(new AddSong(song));
  }

}
