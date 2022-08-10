import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodycenterComponent } from './bodycenter.component';

const routes: Routes = [{ path: '', component: BodycenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodycenterRoutingModule { }
