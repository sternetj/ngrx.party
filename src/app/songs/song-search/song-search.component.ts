import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongSearchComponent {
  @Input() public searchText: string;
  @Output() public searchChange = new EventEmitter<string>();
  @Output() public clearSearch = new EventEmitter();
}
