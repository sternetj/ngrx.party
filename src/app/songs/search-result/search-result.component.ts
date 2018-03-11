import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';

import { Song } from './../../shared/models/song';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent {
  @Input() public song: Song;
  @Output() public songAdded = new EventEmitter<Song>();
}
