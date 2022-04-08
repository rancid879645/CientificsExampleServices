import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CientificComponent } from './components/cientific/cientific.component';
import { CientificDetailComponent } from './components/cientificdetail/cientificdetail.component';

const routes: Routes = [
  {
    path:"",
    component: CientificComponent
  },
  {
    path:"cientific",
    component: CientificComponent
  },
  {
    path:"cientificdetail",
    component:CientificDetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
