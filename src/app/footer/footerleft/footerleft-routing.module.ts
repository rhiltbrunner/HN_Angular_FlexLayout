import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterleftComponent } from './footerleft.component';

const routes: Routes = [{ path: '', component: FooterleftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterleftRoutingModule { }
