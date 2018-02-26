import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  {
    path: 'food',
    loadChildren: './food/food.module#FoodModule'
  },
  // {
  //   path: 'games'
  // },
  // {
  //   path: 'videos'
  // },
  {
    path: '',
    pathMatch: 'full',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingMoudle {}
