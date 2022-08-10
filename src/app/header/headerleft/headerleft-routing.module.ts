import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderleftComponent } from './headerleft.component';

const routes: Routes = [{ path: '', component: HeaderleftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderleftRoutingModule { }
