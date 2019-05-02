import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {HistoryComponent} from './history/history.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin',
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminComponent,
  },
  {
    path:'history',
    component:HistoryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,[RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
