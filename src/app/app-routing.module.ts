import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

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
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingMoudle {}
