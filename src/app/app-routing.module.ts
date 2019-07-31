import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiddleComponent } from './middle/middle.component';

const routes: Routes = [
  {path:'middle' ,component:MiddleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
