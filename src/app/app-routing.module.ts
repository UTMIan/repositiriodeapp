import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'saccount',
    loadChildren: () => import('./home/saccount/saccount.module').then ( m => m.SaccountPageModule)
  },
  {
    path: 'academic',
    loadChildren: () => import('./home/academic/academic.module').then ( m => m.AcademicPageModule)
  },
  {
    path: 'quizzes',
    loadChildren: () => import('./home/quizzes/quizzes.module').then ( m => m.QuizzesPageModule)
  },
  {
    path: 'uporfile',
    loadChildren: () => import('./home/uporfile/uporfile.module').then ( m => m.UporfilePageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
