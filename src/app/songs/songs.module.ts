import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { SongsComponent } from './songs.component';
import { SongsRoutingModule } from './songs-routing.module';
import { SongSearchComponent } from './song-search/song-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SongTileComponent } from './song-tile/song-tile.component';

@NgModule({
  imports: [
    SharedModule,
    SongsRoutingModule,
  ],
  declarations: [
    SongsComponent,
    SongSearchComponent,
    SearchResultComponent,
    SongTileComponent,
  ],
})
export class SongsModule { }
