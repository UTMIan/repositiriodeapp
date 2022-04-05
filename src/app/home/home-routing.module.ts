import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'saccount',
    loadChildren: () => import('./saccount/saccount.module').then( m => m.SaccountPageModule)
  },
  {
    path: 'uporfile',
    loadChildren: () => import('./uporfile/uporfile.module').then( m => m.UporfilePageModule)
  },
  {
    path: 'academic',
    loadChildren: () => import('./academic/academic.module').then( m => m.AcademicPageModule)
  },
  {
    path: 'quizzes',
    loadChildren: () => import('./quizzes/quizzes.module').then( m => m.QuizzesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
