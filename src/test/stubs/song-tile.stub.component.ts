import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Song } from '../../app/shared/models/song';

@Component({
  selector: 'app-song-tile',
  template: ' ',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongTileStubComponent {
  @Input() public song: Song;
}
