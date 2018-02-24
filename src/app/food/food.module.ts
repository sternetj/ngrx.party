import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FoodRoutingModule
  ],
  declarations: [
    FoodComponent
  ]
})
export class FoodModule { }
