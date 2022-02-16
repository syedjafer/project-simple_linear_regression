import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LrComponent } from './lr/lr.component';

const routes: Routes = [
  { path: '', component: LrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
