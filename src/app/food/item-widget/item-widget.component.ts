import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Supply } from '../../shared/models/supply';

@Component({
  selector: 'app-item-widget',
  templateUrl: './item-widget.component.html',
  styleUrls: ['./item-widget.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemWidgetComponent implements OnChanges {
  @Input() public supply: Supply;
  public remaining: number;

  public ngOnChanges(): void {
    this.remaining = this.supply.count - this.supply.users.length;
  }
}
