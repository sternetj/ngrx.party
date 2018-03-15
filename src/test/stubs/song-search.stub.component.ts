import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-song-search',
  template: ' ',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongSearchStubComponent {
  @Input() public searchText: string;
  @Output() public searchChange = new EventEmitter<string>();
  @Output() public clearSearch = new EventEmitter();
}
