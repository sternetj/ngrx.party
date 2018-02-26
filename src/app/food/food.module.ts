import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { SharedModule } from '../shared/shared.module';
import { ItemWidgetComponent } from './item-widget/item-widget.component';
import { CreateFoodComponent } from './create-food/create-food.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FoodRoutingModule
  ],
  declarations: [
    FoodComponent,
    ItemWidgetComponent,
    CreateFoodComponent
  ]
})
export class FoodModule { }
