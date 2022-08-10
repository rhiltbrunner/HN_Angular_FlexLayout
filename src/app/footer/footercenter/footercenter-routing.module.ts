import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootercenterComponent } from './footercenter.component';

const routes: Routes = [{ path: '', component: FootercenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootercenterRoutingModule { }
