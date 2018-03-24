import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  {
    path: 'food',
    loadChildren: './food/food.module#FoodModule'
  },
  {
    path: 'games',
    loadChildren: './games/game.module#GameModule'
  },
  {
    path: 'songs',
    loadChildren: './songs/songs.module#SongsModule'
  },
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
