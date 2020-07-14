import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SplashPage,
  RecipesPage,
  LegoPage,
  ErrorPage
} from './pages';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SplashPage },
  { path: 'recipes', component: RecipesPage },
  { path: 'kids', loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)},
  { path: 'workouts', loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule)},
  { path: 'lego', component: LegoPage },
  { path: '**', component: ErrorPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
