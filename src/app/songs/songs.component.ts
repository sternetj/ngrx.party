import { AppState, selectSongs } from './../core/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Song } from '../shared/models/song';
import { UpdateSearch, ClearSearch, AddSong, GetAllSongs } from '../core/state/songs/songs.actions';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  public search$: Observable<string>;
  public isSearching$: Observable<boolean>;
  public searchResults$: Observable<Song[]>;
  public addedSongs$: Observable<Song[]>;

  // public url;

  constructor(private store: Store<AppState>, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.store.dispatch(new GetAllSongs());

    const songState$ = this.store.select(selectSongs);

    this.search$ = songState$.pipe(map((state) => state && state.search));
    this.isSearching$ = songState$.pipe(map((state) => state && state.searching));
    this.searchResults$ = songState$.pipe(map((state) => state && state.searchResults));
    this.addedSongs$ = songState$.pipe(map((state) => state && state.addedSongs));

    // this.addedSongs$.subscribe((songs) => {
    //   if (songs.length) {
    //     this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${songs[0].id}?autoplay=1`);
    //   }
    // });
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
