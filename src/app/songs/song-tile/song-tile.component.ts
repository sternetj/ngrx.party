import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Song } from '../../shared/models/song';

@Component({
  selector: 'app-song-tile',
  templateUrl: './song-tile.component.html',
  styleUrls: ['./song-tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongTileComponent {
  @Input() public song: Song;
}
