import { Component, EventEmitter, Input, Output, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Food } from '../../shared/models/food';

import { State } from '../../core/state/user/user.reducer';

@Component({
  selector: 'app-item-widget',
  templateUrl: './item-widget.component.html',
  styleUrls: ['./item-widget.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemWidgetComponent implements OnChanges {
  @Input() public food: Food;
  @Input() public bringDisabled: boolean;
  @Output() public bringingFood = new EventEmitter();

  public remaining: number;

  public ngOnChanges() {
    console.log(this.food);
    this.remaining = this.food.count - this.food.users.length;
  }
}
