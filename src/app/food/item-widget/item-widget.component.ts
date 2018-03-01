import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Food } from '../../shared/models/food';

@Component({
  selector: 'app-item-widget',
  templateUrl: './item-widget.component.html',
  styleUrls: ['./item-widget.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemWidgetComponent implements OnChanges {
  @Input() public food: Food;
  public remaining: number;

  public ngOnChanges(): void {
    console.log(this.food)
    this.remaining = this.food.count - this.food.users.length;
  }
}
