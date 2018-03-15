import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Song } from '../../app/shared/models/song';

@Component({
  selector: 'app-search-result',
  template: ' ',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultStubComponent {
  @Input() public song: Song;
  @Output() public songAdded = new EventEmitter<Song>();
}
